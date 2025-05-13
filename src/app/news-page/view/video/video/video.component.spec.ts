import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { TestModule } from 'src/app/testing/test.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewsService } from 'src/app/news-page/news-page.service';
import { of } from 'rxjs';

describe('ComponentNameComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  let newsServiceMock: Partial<NewsService>;

  beforeEach(async () => {
    newsServiceMock = {
      getVideo: jasmine
        .createSpy('getVideo')
        .and.returnValue(of({ videoId: 1, altText: 'Test', path: 'test.mp4' })),
    };

    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
      imports: [TestModule], // Add any necessary imports here
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: NewsService, useValue: newsServiceMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
