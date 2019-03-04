import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

import { UsersService } from '../users.service';

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
      console.log(res.user);
      this.user = res.user;
    });
  }

  onDelete() {
    this.usersService
      .removeUser(this.user)
      .subscribe(data => console.log(data), err => console.log(err));
    this.router.navigate(['/users']);
  }

  onEdit() {
    console.log('edit');
    this.editedUser = {
      _id: `${this.user._id}`,
      login: 'Farme miau',
      password: 'ijaijao'
    };
    this.usersService
      .editUser(this.editedUser)
      .subscribe(data => console.log(data), err => console.log(err));
  }
}
