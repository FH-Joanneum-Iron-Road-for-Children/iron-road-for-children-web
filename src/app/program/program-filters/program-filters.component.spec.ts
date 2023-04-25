import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFiltersComponent } from './program-filters.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgramFiltersComponent', () => {
  let component: ProgramFiltersComponent;
  let fixture: ComponentFixture<ProgramFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramFiltersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
