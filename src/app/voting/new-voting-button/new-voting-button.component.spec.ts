import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVotingButtonComponent } from './new-voting-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('NewVotingButtonComponent', () => {
  let component: NewVotingButtonComponent;
  let fixture: ComponentFixture<NewVotingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewVotingButtonComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NewVotingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
