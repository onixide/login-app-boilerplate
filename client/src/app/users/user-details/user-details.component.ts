import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

import { UsersService } from '../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  editedUser: User = { _id: '', login: '', password: '' };
  invalidUser: any;
  editing = false;
  userDetailsForm: FormGroup;
  errors = { duplicate: false };

  constructor(
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      res => {
        console.log(res.user.error);
        if (res.user.error) {
          this.invalidUser = res.user.error;
          console.log(this.invalidUser.message);
        } else {
        }
        this.user = res.user;
      },
      err => console.log(err)
    );
    this.createForm();
  }

  createForm() {
    this.userDetailsForm = new FormGroup({
      userLogin: new FormControl(
        { value: this.user.login, disabled: true },
        Validators.required
      ),
      userPassword: new FormControl({ value: '', disabled: true })
    });
  }

  onDelete() {
    this.usersService
      .removeUser(this.user)
      .subscribe(
        () => this.router.navigate(['/users']),
        err => console.log(err)
      );
  }

  onEdit() {
    this.editing = !this.editing;
    this.editedUser.login = this.user.login;

    if (this.editing) {
      this.userDetailsForm.get('userPassword').enable();
      this.userDetailsForm.get('userLogin').enable();
    } else {
      this.userDetailsForm.get('userPassword').disable();
      this.userDetailsForm.get('userLogin').disable();
    }
  }

  onCancel() {
    this.editing = false;
    this.editedUser.login = '';
    this.editedUser.password = '';
    this.errors.duplicate = false;
    this.userDetailsForm.get('userLogin').disable();
    this.userDetailsForm.get('userPassword').disable();
    this.createForm();
  }

  onSubmit() {
    this.editedUser._id = this.user._id;
    this.editedUser.login = this.userDetailsForm.get('userLogin').value;
    this.editedUser.password = this.userDetailsForm.get('userPassword').value;

    this.usersService.editUser(this.editedUser).subscribe(
      () => {
        this.router.navigate([`users`]);
      },
      err => {
        this.errors.duplicate = err.error.message;
      }
    );
  }
}
