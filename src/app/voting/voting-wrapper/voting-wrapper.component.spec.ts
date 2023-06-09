import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingWrapperComponent } from './voting-wrapper.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventService } from '../../services/event.service';
import { VotingService } from '../../services/voting.service';

describe('VotingWrapperComponent', () => {
  let component: VotingWrapperComponent;
  let fixture: ComponentFixture<VotingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingWrapperComponent],
      imports: [HttpClientTestingModule],
      providers: [
        EventService,
        VotingService,
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
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
