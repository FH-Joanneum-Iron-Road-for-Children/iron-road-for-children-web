import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VotingWrapperComponent } from '../voting/voting-wrapper/voting-wrapper.component';

describe('EventService', () => {
  let component: EventService;
  let fixture: ComponentFixture<EventService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EventService],
      providers: [HttpClientTestingModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EventService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // const service: EventService = TestBed.get(EventService);
    expect(component).toBeTruthy();
  });
});
