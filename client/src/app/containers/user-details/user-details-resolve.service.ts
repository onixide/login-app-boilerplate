import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../../models/User.model';
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
        return of(err);
      })
    );
  }
}