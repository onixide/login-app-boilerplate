import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  users: [];
  selectedUser;

  selected;

  ngOnInit() {
  }

 
  getAllUsers() {
    this.usersService.getUsers()
      .subscribe(
        (data: any) => { console.log(data); this.users = data; },
        (error) => console.log(error)
      )
  }

  onSelect(action: string, data: Object = {}): void {
    // this.selectedUser = user
    // console.log(this.selectedUser);

    this.selected = {
      action : action,
      data : data
    }

    console.log(this.selected);
  }

  // onSelectNewUser(){
  //   this.selectedUser = "newUser"
  //   console.log(this.selectedUser);
  // }


}
