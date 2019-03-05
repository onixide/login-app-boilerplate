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
  editedUser: User;
  invalidUser = false;
  editing = false;
  userDetailsForm: FormGroup;
  dirty = false;
  errors = [];

  constructor(
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      if (res.user.error) {
        console.log(res.user.error.message);
        this.invalidUser = res.user.error;
      }
      console.log(JSON.stringify(res.user));
      this.user = res.user;
    });
    this.createForm();
  }

  createForm() {
    this.userDetailsForm = new FormGroup({
      userLogin: new FormControl(
        { value: this.user.login, disabled: true },
        Validators.required
      )
    });
  }

  onDelete() {
    this.usersService
      .removeUser(this.user)
      .subscribe(data => console.log(data), err => console.log(err));
    this.router.navigate(['/users']);
  }

  onInput(event) {
    const dirtyHook = this.userDetailsForm.get('userLogin').dirty;
    const valueHook = this.userDetailsForm.get('userLogin').value;
    console.log(this.editedUser);
    this.editedUser.login = valueHook;
    if (
      dirtyHook &&
      JSON.stringify(valueHook) === JSON.stringify(this.user.login)
    ) {
      this.dirty = false;
    } else {
      this.dirty = true;
    }
  }

  onEdit() {
    this.editing = !this.editing;
    this.editedUser = Object.assign({}, this.user);

    if (this.editing) {
      this.userDetailsForm.get('userLogin').enable();
      console.log(this.userDetailsForm.get('userLogin'));
    } else {
      this.userDetailsForm.get('userLogin').disable();
    }
  }

  onCancel() {
    this.editing = false;
    this.dirty = false;
    this.editedUser = Object.assign({}, this.user);
    this.userDetailsForm.get('userLogin').disable();
    console.log('CANCEL');
    this.createForm();
  }

  onSubmit() {
    console.log('submittttt');

    this.usersService.editUser(this.editedUser).subscribe(
      data => {
        console.log('Edytowano');
        console.log(data);
        this.router.navigate([`users`]);
      },
      err => {
        console.log(err);
        this.errors.push(err.error.message);
      }
    );
  }
}
