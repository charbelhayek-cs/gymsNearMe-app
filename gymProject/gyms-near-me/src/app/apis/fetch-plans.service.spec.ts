import { TestBed } from '@angular/core/testing';

import { FetchPlansService } from './fetch-plans.service';

describe('FetchPlansService', () => {
  let service: FetchPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
