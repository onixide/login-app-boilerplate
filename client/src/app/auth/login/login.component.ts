import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl } from '@angular/forms';
=======
import { UsersService } from '../../users/users.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
>>>>>>> changes before fetch

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  loginForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    console.log('SUBMIT');
    console.warn(this.loginForm.value);
  }
=======
  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    // console.log(f.value);  // { first: '', last: '' }
    console.log('XXX'); // false
  }
>>>>>>> changes before fetch
}
