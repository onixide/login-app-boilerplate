import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/guards/auth-guard.service';
import { NoAuthGuardService } from './auth/guards/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => UsersModule,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
    canActivate: [NoAuthGuardService]
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
  exports: [RouterModule],
  providers: [AuthGuardService, NoAuthGuardService]
})
export class AppRoutingModule {}
