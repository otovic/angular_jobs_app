import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { inject } from '@angular/core';

export const signInGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);

  if (!auth.isAuthenticated()) return true;
  return false;
};
