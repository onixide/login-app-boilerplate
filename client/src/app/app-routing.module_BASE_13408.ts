import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> git troubles
import { UserListItemComponent } from './users/user-list/user-list-item/user-list-item.component';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';
import { UsersResolveService } from './users/users-resolve.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => UsersModule
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
