import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightUploadComponent } from './highlight-upload.component';

describe('HighlightUploadComponent', () => {
  let component: HighlightUploadComponent;
  let fixture: ComponentFixture<HighlightUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
