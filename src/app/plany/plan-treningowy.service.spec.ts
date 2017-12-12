import { TestBed, inject } from '@angular/core/testing';

import { PlanTreningowyService } from './plan-treningowy.service';

describe('PlanTreningowyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanTreningowyService]
    });
  });

  it('should be created', inject([PlanTreningowyService], (service: PlanTreningowyService) => {
    expect(service).toBeTruthy();
  }));
});
