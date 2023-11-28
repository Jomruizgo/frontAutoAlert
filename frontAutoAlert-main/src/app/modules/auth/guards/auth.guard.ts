
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree>  {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirige al componente de inicio de sesión si no está autenticado
      console.log("CanActivateFn: No está autenticado");
      return this.router.createUrlTree(['']);
    }
  }
}
