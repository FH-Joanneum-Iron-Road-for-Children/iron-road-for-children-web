import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTargetDateDialogComponent } from './edit-target-date-dialog.component';

describe('EditTargetDateDialogComponent', () => {
  let component: EditTargetDateDialogComponent;
  let fixture: ComponentFixture<EditTargetDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTargetDateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTargetDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
