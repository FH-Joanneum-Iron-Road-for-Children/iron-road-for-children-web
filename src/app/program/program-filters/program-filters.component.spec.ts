import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFiltersComponent } from './program-filters.component';

describe('ProgramFiltersComponent', () => {
  let component: ProgramFiltersComponent;
  let fixture: ComponentFixture<ProgramFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
