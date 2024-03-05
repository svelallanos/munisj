import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toaster = inject(ToastrService);

  const allowedRoles = route.data?.['allowedRoles'];

  return authService.currentUser$.pipe(
    map((user:any) => {
      if (user && user.role && allowedRoles) {
        const hasPermission = user.role.some((userRole:any) => allowedRoles.includes(userRole));
        if (hasPermission) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }),
    tap((hasRole:any) => hasRole === false && toaster.error("Acceso denegado", "Error"))
    );
};
