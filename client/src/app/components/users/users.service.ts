import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/users';

  getUsers() {
    //http metody zwracaja observable, nie sa wykonywane dopuki nie  subcribe ich
    return this.http.get(this.configUrl)
    }
 
}

