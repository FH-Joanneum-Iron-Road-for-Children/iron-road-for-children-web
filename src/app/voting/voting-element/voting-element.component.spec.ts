import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingElementComponent } from './voting-element.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VotingElementComponent', () => {
  let component: VotingElementComponent;
  let fixture: ComponentFixture<VotingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingElementComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
