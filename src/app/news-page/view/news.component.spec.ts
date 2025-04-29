import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { TestModule } from 'src/app/testing/test.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [TestModule], // Add any necessary imports here
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add any necessary schemas here
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
