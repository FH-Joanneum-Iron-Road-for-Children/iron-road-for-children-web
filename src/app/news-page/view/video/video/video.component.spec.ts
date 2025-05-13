import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoComponent } from './video.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
      imports: [HttpClientTestingModule, FormsModule], // Mock HTTP requests
      providers: [{ provide: MatDialog, useValue: {} }], // Mock MatDialog
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ignore unknown elements in the template
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
