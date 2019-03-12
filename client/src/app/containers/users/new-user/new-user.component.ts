import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  errors = { duplicate: false };
  newUser: User;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.newUserForm = new FormGroup({
      login: new FormControl('test'),
      password: new FormControl('test')
    });
  }

  onSubmit() {
    console.log('submittttt');

    this.newUser = {
      login: this.newUserForm.get('login').value,
      password: this.newUserForm.get('password').value
    };
    this.usersService.addUser(this.newUser).subscribe(
      data => {
        this.router.navigate([`users`]);
      },
      err => {
        this.errors.duplicate = err.error.message;
      }
    );
  }
}
