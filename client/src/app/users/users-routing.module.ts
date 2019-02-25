import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolveService } from './users-resolve.service';
import { UserDetailsResolveService } from './user-details/user-details-resolve.service';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
    resolve: {
      usersxa: UsersResolveService
    },
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        pathMatch: 'full'
        // resolve: {
        //   userID: UserDetailsResolveService
        // }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
