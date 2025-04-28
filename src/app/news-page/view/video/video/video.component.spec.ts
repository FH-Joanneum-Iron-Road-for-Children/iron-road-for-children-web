import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { TestModule } from 'src/app/testing/test.module';

describe('ComponentNameComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
      imports: [TestModule], // Add any necessary imports here
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
