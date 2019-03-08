import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;
  constructor(private router: Router) {}

  ngOnInit() {}
  onSelect(user: User) {
    this.router.navigate([`/users/${user._id}`]);
  }
}
