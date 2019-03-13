import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createError } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.error-messages { height: 36px; }']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  error = { msg: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('test'),
      password: new FormControl('test')
    });
  }

  onSubmit() {
    this.user = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    };

    this.authService.logUser(this.user).subscribe(
      data => {
        console.log(`USER " ${data.user.login} " LOGGED IN`);
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/users']);
      },
      err => {
        this.error.msg = err.error.msg;
        console.log(err.error.msg);
      }
    );
  }
}
