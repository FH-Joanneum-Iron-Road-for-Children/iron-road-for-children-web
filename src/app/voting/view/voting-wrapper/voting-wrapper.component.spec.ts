import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingWrapperComponent } from './voting-wrapper.component';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('VotingWrapperComponent', () => {
  let component: VotingWrapperComponent;
  let fixture: ComponentFixture<VotingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingWrapperComponent],
      imports: [HttpClientModule],
      providers: [{ provide: MatDialog, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
