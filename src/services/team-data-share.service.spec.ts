import { TestBed } from '@angular/core/testing';

import { TeamDataShareService } from './team-data-share.service';

describe('TeamDataShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamDataShareService = TestBed.get(TeamDataShareService);
    expect(service).toBeTruthy();
  });
});
