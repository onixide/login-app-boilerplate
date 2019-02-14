import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
