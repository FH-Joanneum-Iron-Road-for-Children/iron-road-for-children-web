import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramViewComponent } from './program-view.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ProgramViewComponent', () => {
  let component: ProgramViewComponent;
  let fixture: ComponentFixture<ProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramViewComponent],
      imports: [HttpClientModule],
      providers: [{ provide: MatDialog, useValue: {} }],
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
