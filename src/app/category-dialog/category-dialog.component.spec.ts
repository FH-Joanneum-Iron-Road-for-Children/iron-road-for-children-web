import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDialogComponent } from './category-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CategoryDialogComponent', () => {
  let component: CategoryDialogComponent;
  let fixture: ComponentFixture<CategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
