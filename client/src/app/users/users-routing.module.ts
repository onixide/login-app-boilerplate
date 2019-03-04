import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolveService } from './users-resolve.service';
import { UserDetailsResolveService } from './user-details/user-details-resolve.service';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
    resolve: {
      users: UsersResolveService
    }
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: ':id',
    component: UserDetailsComponent,
    resolve: {
      user: UserDetailsResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
