import { TestBed } from '@angular/core/testing';

import { FetchGymsService } from './fetch-gyms.service';

describe('FetchGymsService', () => {
  let service: FetchGymsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGymsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
