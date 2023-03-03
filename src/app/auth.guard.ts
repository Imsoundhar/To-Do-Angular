import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // if (this.authService.user) {
    //   sessionStorage.getItem('user');
    //   return true;
    // } else {
    //   return false;
    // }
    if (sessionStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }
}
