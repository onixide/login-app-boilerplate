import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  

  
  newUserData: any;

  constructor(private usersService : UsersService) { }

  ngOnInit() {
  }

  newUser() {
    this.usersService.addUser(this.newUserData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }

}
