import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: String;
  authUser: String;

  constructor(private http: HttpClient) {}

  authConfigUrl = 'http://localhost:3000/auth';
  registerConfigUrl = 'http://localhost:3000/users';

  registerUser(newUser: User): Observable<any> {
    return this.http.post(this.registerConfigUrl, newUser);
  }

  logUser(user: User): Observable<any> {
    return this.http.post(this.authConfigUrl, user);
  }

  storeUserData(token: string, user: string): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_data', JSON.stringify(user));
    this.authToken = token;
    this.authUser = user;
  }

  logout() {
    this.authToken = null;
    this.authUser = null;
    localStorage.clear();
    console.log('USER LOGOUT');
  }
}
