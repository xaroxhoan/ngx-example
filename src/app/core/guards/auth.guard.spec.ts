import { TestBed } from '@angular/core/testing';
import { authGuard } from './auth.guard';
import { AuthStore } from '../store/auth.store';

describe('authGuard', () => {
  const authStore = jasmine.createSpyObj('AuthStore', []);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        authGuard,
        {
          provide: AuthStore,
          useValue: authStore,
        },
      ],
    });
  });

  it('should protect the route', () => {});
});
