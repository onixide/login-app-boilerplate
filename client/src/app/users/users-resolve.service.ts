import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from '../models/User.model';
import { Observable } from 'rxjs/internal/Observable';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    console.log('RESOLVER GET ALL USERS WORKS');
    return this.usersService.getUsers();
  }
}
