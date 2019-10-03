import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService, UserDetails } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  details: UserDetails;

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/home');
      return false;
    }
      return true;
    }
}
