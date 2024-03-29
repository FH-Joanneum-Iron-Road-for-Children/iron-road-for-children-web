import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingAddEditComponent } from './voting-add-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EventService } from '../../services/event/event.service';
import { VotingService } from '../../services/voting/voting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VotingAddEditComponent', () => {
  let component: VotingAddEditComponent;
  let fixture: ComponentFixture<VotingAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingAddEditComponent],
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

    fixture = TestBed.createComponent(VotingAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
