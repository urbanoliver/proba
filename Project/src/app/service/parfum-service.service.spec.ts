import { TestBed } from '@angular/core/testing';

import { ParfumServiceService } from './parfum-service.service';

describe('ParfumServiceService', () => {
  let service: ParfumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParfumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
