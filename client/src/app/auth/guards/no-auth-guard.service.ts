import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/users']);
      console.log(
        'guard - you are logged in - so you shouldnt try login again or register :)'
      );
      return false;
    } else {
      return true;
    }
  }
}
