import { TestBed } from '@angular/core/testing';

import { GetSeasonService } from './get-season.service';

describe('GetSeasonService', () => {
  let service: GetSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
