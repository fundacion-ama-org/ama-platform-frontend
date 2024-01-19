// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.isAuthenticated().pipe(
      map((isAuthenticated: any) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/iniciar-sesion']); // Redirige al usuario a la página de inicio de sesión si no está autenticado
          return false;
        }
      })
    );
  }
}
