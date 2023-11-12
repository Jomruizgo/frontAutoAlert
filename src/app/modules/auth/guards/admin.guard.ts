import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AdminGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree>  {
    if (this.authService.getLogedUser().role == 'admin') {
      return true;
    } else {
      // Redirige al componente de home si no está autenticado como administrador
      console.log("CanActivateFn: No es administrador");
      return this.router.createUrlTree(['/home']);
    }
  }
}
