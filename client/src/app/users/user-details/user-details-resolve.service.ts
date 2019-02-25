import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../models/User.model';
import { UsersService } from './../users.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolveService implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    console.log('RESOLVER CUSTOM USER WORKS');
    console.log(route.params.id);
    // const xxx = this.usersService.getUserByID(route.params.id);
    // console.log(this.usersService.getUserByID('5c5c27e3ca80331c647b6935'));
    return this.usersService
      .getUserByID(route.params.id)
      .pipe(this.usersService.handleError<any>("'deleteHero'"));
  }
}

// .pipe(
//     map(product => ({ product: product })),
//     catchError(error => {
//       const message = `Retrieval error: ${error}`;
//       console.error(message);
//       return of({ product: null, error: message });
//     })
