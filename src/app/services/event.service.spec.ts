import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';

describe('DateConverterService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
