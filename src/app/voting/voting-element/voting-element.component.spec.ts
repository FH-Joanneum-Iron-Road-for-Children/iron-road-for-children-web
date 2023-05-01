import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingElementComponent } from './voting-element.component';

describe('VotingElementComponent', () => {
  let component: VotingElementComponent;
  let fixture: ComponentFixture<VotingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
