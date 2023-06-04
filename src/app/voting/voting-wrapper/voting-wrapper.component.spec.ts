import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingWrapperComponent } from './voting-wrapper.component';

describe('VotingWrapperComponent', () => {
  let component: VotingWrapperComponent;
  let fixture: ComponentFixture<VotingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
