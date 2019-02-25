import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:3000/users';

  getUsers() {
    // http metody zwracaja observable, nie sa wykonywane dopuki nie  subcribe ich
    return this.http.get(this.configUrl);
  }

  addUser(user: User) {
    return this.http.post(this.configUrl, user);
  }

  getUserByID(userID: string) {
    return this.http.get(`${this.configUrl}/${userID}`);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
