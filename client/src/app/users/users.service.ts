import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get<User[]>(this.configUrl);
  }

  addUser(user: User) {
    return this.http.post<User>(this.configUrl, user);
  }

  getUserByID(userID: string) {
    return this.http.get<User>(`${this.configUrl}/${userID}`);
  }

  editUser(user: User) {
    return this.http.put<User>(`${this.configUrl}/${user._id}`, user);
  }

  removeUser(user: User) {
    return this.http.delete<User>(`${this.configUrl}/${user._id}`);
  }
}
