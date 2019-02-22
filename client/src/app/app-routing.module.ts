import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserListItemComponent } from './users/user-list/user-list-item/user-list-item.component';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';
import { UsersResolveService } from './users/users-resolve.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => UsersModule
  },
  {
    path: '**',
    redirectTo: 'users'
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
