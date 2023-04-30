import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventFormComponent } from './add-event-form.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddEventFormComponent', () => {
  let component: AddEventFormComponent;
  let fixture: ComponentFixture<AddEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventFormComponent],
      providers: [
        MatDialogModule,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
