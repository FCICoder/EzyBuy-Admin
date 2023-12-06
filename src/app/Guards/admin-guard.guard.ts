// import { adminGuardGuard } from './admin-guard.guard';
// import { CanActivateFn } from '@angular/router';

// export const adminGuardGuard {

// }

// export const adminGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AdminAuthService } from '../Services/admin-auth/admin-auth.service';

@Injectable({
  providedIn: 'root',
})
export class adminGuardGuard {
  constructor(private adminSrv: AdminAuthService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.adminSrv.adminLogged$.pipe(
      take(1),
      map((adminLogged) => {
        if (adminLogged) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}