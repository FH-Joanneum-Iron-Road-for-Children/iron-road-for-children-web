import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVotingButtonComponent } from './new-voting-button.component';

describe('NewVotingButtonComponent', () => {
  let component: NewVotingButtonComponent;
  let fixture: ComponentFixture<NewVotingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewVotingButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewVotingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
