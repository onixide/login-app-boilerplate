import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  constructor() {}

  ngOnInit() {}

  onxxx(xxx) {
    console.log(xxx);
  }
}
