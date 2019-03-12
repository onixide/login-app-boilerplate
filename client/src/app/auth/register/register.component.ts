import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  newUser: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.newUser = {
      login: this.registerForm.get('login').value,
      password: this.registerForm.get('password').value
    };

    this.authService.registerUser(this.newUser).subscribe(
      data => {
        console.log('USER REGISTERED');
      },
      err => console.log(err)
    );
  }
}
