import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
