import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramViewComponent } from './program-view.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgramViewComponent', () => {
  let component: ProgramViewComponent;
  let fixture: ComponentFixture<ProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramViewComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
