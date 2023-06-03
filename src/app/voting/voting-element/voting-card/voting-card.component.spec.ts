import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingCardComponent } from './voting-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

describe('VotingCardComponent', () => {
  let component: VotingCardComponent;
  let fixture: ComponentFixture<VotingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingCardComponent],
      providers: [{ provide: MatDialog, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
