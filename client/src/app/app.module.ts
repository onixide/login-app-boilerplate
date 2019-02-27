import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
