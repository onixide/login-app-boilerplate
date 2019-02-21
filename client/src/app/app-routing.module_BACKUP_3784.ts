import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
<<<<<<< HEAD
=======
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> git troubles
import { UserListItemComponent } from './users/user-list/user-list-item/user-list-item.component';
import { UsersComponent } from './users/users.component';
>>>>>>> git troubles
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => UsersModule
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: '**',
    redirectTo: 'auth/login'
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
