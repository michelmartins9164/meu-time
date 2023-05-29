import { TestBed } from '@angular/core/testing';

import { StatisticsTeamService } from './statistics-team.service';

describe('StatisticsTeamService', () => {
  let service: StatisticsTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
