import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
<<<<<<< HEAD
=======
import { UserListItemComponent } from './users/user-list/user-list-item/user-list-item.component';
import { UsersComponent } from './users/users.component';
>>>>>>> changes before fetch
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
