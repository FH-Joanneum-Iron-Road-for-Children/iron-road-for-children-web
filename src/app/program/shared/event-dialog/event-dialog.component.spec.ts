import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDialogComponent } from './event-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditEventDialogComponent', () => {
  let component: EventDialogComponent;
  let fixture: ComponentFixture<EventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
