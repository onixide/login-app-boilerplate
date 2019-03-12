import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

import { UsersService } from '../users/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  editedUser: any = { _id: '', password: '' };
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

    if (this.editing) {
      this.userDetailsForm.get('userPassword').enable();
    } else {
      this.userDetailsForm.get('userPassword').disable();
    }
  }

  onCancel() {
    this.editing = false;

    this.editedUser.password = '';

    this.userDetailsForm.get('userPassword').disable();
    this.createForm();
  }

  onSubmit() {
    this.editedUser._id = this.user._id;
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
