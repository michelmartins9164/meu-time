import { TestBed } from '@angular/core/testing';

import { GetDataAPiService } from './get-data-api.service';

describe('GetDataAPiService', () => {
  let service: GetDataAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
