import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get(this.configUrl);
  }

  addUser(user: User) {
    return this.http.post(this.configUrl, user);
  }

  getUserByID(userID: string) {
    return this.http.get(`${this.configUrl}/${userID}`);
  }
}
