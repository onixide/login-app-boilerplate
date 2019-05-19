import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {User} from '../../models/user.model';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolveService implements Resolve<User> {
  constructor(private usersService: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    console.log('RESOLVER CUSTOM USER');

    return this.usersService.getUserByID(route.params.id).pipe(
      catchError(err => {
          // return new throwError(err);
          return of(err);
      })
    );
  }
}
