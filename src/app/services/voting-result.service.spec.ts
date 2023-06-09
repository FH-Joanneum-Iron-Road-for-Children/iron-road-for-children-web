import { TestBed } from '@angular/core/testing';

import { VotingResultService } from './voting-result.service';
import { HttpClientModule } from '@angular/common/http';

describe('VotingResultService', () => {
  let service: VotingResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(VotingResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
