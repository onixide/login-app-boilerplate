import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.users;
    });
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe(data => console.log(data));
  }

  onSelect(user: User) {
    this.router.navigate([`/users/${user._id}`]);
  }

  addNewUser() {
    console.log('addNewUSER');
    this.router.navigate([`/users/new-user`]);
  }
}
