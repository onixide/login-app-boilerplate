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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.users = data.usersxa;
    });
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe(data => console.log(data));
  }

  onSelect(user: User) {
    console.log(user);
  }
}
