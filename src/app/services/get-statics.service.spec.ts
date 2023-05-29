import { TestBed } from '@angular/core/testing';

import { GetStaticsService } from './get-statics.service';

describe('GetStaticsService', () => {
  let service: GetStaticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStaticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
