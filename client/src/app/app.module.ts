import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';

// routes
export const ROUTES: Routes = [
  {
      path: 'users',
      pathMatch: 'full',
      // loadChildren: './projects/projects.module#ProjectsModule'
  },
  { path: '', pathMatch: 'full', redirectTo: '/users' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
