import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialComponent } from './social.component';
import { TestModule } from 'src/app/testing/test.module';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialComponent],
      imports: [TestModule], // Add any necessary imports here
    }).compileComponents();

    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
