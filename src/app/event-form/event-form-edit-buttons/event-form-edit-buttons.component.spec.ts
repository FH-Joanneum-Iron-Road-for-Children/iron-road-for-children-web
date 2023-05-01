import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormEditButtonsComponent } from './event-form-edit-buttons.component';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('EventFormEditButtonsComponent', () => {
  let component: EventFormEditButtonsComponent;
  let fixture: ComponentFixture<EventFormEditButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventFormEditButtonsComponent],
      providers: [{ provide: MatDialog, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EventFormEditButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
