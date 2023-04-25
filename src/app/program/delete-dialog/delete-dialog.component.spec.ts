import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteDialogComponent} from './delete-dialog.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DeleteDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialogModule, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
    }).compileComponents();


    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
