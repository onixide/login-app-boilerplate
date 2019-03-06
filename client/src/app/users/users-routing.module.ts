import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolveService } from './users-resolve.service';
import { UserDetailsResolveService } from './user-details/user-details-resolve.service';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthGuardService } from './../auth/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    resolve: {
      users: UsersResolveService
    }
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':id',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService],
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
