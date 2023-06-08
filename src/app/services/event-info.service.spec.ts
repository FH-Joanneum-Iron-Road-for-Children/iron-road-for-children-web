import { TestBed } from '@angular/core/testing';

import { EventInfoService } from './event-info.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventInfoService', () => {
  let service: EventInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EventInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
