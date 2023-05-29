import { TestBed } from '@angular/core/testing';

import { GetCountryForNameService } from './get-country-for-name.service';

describe('GetCountryForNameService', () => {
  let service: GetCountryForNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountryForNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
