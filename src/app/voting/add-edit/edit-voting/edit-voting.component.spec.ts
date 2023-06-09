import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditVotingComponent } from './edit-voting.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventService } from '../../../services/event.service';
import { VotingService } from '../../../services/voting.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditComponentComponent', () => {
  let component: EditVotingComponent;
  let fixture: ComponentFixture<EditVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVotingComponent],
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

    fixture = TestBed.createComponent(EditVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
