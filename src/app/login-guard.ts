import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from './login/login-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: LoginServiceService) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    if (this.authService.isAuthenticated()) { return true; }

    this.router.navigate(['/signin']);
    return false;
  }

}
