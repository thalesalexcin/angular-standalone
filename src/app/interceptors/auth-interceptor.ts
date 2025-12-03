import { HttpInterceptorFn } from '@angular/common/http';
import { User } from '../models/user';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userRaw = localStorage.getItem('user');
  if (!userRaw) {
    return next(req);
  }
  const user: User = JSON.parse(userRaw);
  const authorization = btoa(`${user.username}:${user.password}`);

  const cloned = req.clone({
    setHeaders: { Authorization: `Basic ${authorization}` },
  });
  return next(cloned);
};
