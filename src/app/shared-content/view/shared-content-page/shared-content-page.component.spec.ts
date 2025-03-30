import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContentPageComponent } from './shared-content-page.component';

describe('SharedContentPageComponent', () => {
  let component: SharedContentPageComponent;
  let fixture: ComponentFixture<SharedContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedContentPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
