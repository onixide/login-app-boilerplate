/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDetailsResolveService } from './user-details-resolve.service';

describe('Service: UserDetailsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailsResolveService]
    });
  });

  it('should ...', inject([UserDetailsResolveService], (service: UserDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
