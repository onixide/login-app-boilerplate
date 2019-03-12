import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
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
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          console.log('USER LOGGED IN');
          this.router.navigate(['/users']);
        }
      },
      err => console.log(err)
    );
  }
}
