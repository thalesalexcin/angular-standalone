import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Token } from '../models/token';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { catchError, switchMap, tap, throwError } from 'rxjs';

const AUTH_URL = environment.BACKEND_URL + '/authenticate';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url == AUTH_URL) {
    return next(req);
  }

  const rawTokens = localStorage.getItem('tokens');
  if (rawTokens == null) {
    return next(req);
  }
  const tokens: Token = JSON.parse(rawTokens);

  const authService = inject(AuthService);
  if (!authService.isExpired(tokens.accessToken)) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${tokens.accessToken}` },
    });
    return next(cloned);
  }

  return authService.refreshToken(tokens.refreshToken).pipe(
    tap((newTokens) => {
      localStorage.setItem('tokens', JSON.stringify(newTokens));
    }),
    switchMap((newTokens) => {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${newTokens.accessToken}` },
      });
      return next(cloned);
    }),
    catchError((err) => {
      console.log('REFRESH TOKEN ERROR', err);
      localStorage.removeItem('tokens');
      return next(req);
    }),
  );
};
