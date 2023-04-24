import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramComponent } from './program.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
