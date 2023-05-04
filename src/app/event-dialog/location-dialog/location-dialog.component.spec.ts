import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDialogComponent } from './location-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LocationDialogComponent', () => {
  let component: LocationDialogComponent;
  let fixture: ComponentFixture<LocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
