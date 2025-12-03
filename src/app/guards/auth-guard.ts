import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  }

  const router = inject(Router);
  return router.createUrlTree(['/auth']);
};
