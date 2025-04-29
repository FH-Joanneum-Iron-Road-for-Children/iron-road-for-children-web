import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EditTargetDateDialogComponent } from './edit-target-date-dialog.component';
import { TestModule } from 'src/app/testing/test.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('EditTargetDateDialogComponent', () => {
  let component: EditTargetDateDialogComponent;
  let fixture: ComponentFixture<EditTargetDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTargetDateDialogComponent],
      imports: [TestModule, BrowserAnimationsModule, NoopAnimationsModule], // Add MatDialogModule and FormsModule
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: { targetDate: new Date() } }, // Mock MAT_DIALOG_DATA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTargetDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
