import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { User } from '../models/User.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(): Observable<any> | Promise<any> | any {
    console.log('RESOLVER GET ALL USERS WORKS');
    return this.usersService.getUsers();
  }
}
