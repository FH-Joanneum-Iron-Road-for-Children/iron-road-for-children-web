import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVotingComponent } from './edit-voting.component';

describe('EditComponentComponent', () => {
  let component: EditVotingComponent;
  let fixture: ComponentFixture<EditVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVotingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
