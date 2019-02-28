import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { HeaderComponent } from '../app/shared/header/header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          console.log('TOKEN ZXZ');
          return localStorage.getItem('id_token');
        },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
