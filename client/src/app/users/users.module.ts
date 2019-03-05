import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UsersService } from './users.service';
import { UsersResolveService } from './users-resolve.service';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    NewUserComponent
  ],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  providers: [UsersService, UsersResolveService]
})
export class UsersModule {}
