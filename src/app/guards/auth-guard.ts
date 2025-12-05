import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.isConnected()) {
    return true;
  }

  const router = inject(Router);
  return router.createUrlTree(['/auth']);
};
