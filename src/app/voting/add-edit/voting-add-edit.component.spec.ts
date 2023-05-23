import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAddEditComponent } from './voting-add-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VotingAddEditComponent', () => {
  let component: VotingAddEditComponent;
  let fixture: ComponentFixture<VotingAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingAddEditComponent],
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
