import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:3000/users';
  getToken = localStorage.getItem('id_token');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken}`
    })
  };

  getUsers() {
    return this.http.get<User[]>(this.configUrl, this.httpOptions);
  }

  addUser(user: User) {
    return this.http.post<User>(this.configUrl, user, this.httpOptions);
  }

  getUserByID(userID: string) {
    return this.http.get<User>(`${this.configUrl}/${userID}`, this.httpOptions);
  }

  editUser(user: User) {
    return this.http.put<User>(
      `${this.configUrl}/${user._id}`,
      user,
      this.httpOptions
    );
  }

  removeUser(user: User) {
    return this.http.delete<User>(
      `${this.configUrl}/${user._id}`,
      this.httpOptions
    );
  }
}
