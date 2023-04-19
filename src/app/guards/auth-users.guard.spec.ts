import { TestBed } from '@angular/core/testing';

import { AuthUsersGuard } from './auth-users.guard';

describe('AuthUsersGuard', () => {
  let guard: AuthUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
