import { TestBed } from '@angular/core/testing';

import { DeactivateExGuard } from './deactivate-ex.guard';

describe('DeactivateExGuard', () => {
  let guard: DeactivateExGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateExGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
