import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { User } from '../../models/User.model';
import { UsersService } from './../users.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolveService implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    console.log('RESOLVER CUSTOM USER WORKS');
    console.log(route);
    console.log(this.usersService.getUserByID('5c5c27e3ca80331c647b6935'));
    return this.usersService.getUserByID('5c5c27e3ca80331c647b6935');
  }
}
