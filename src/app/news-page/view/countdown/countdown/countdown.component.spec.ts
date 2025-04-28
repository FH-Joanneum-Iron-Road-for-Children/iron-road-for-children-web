import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CountdownService } from 'src/app/services/countdown.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountdownComponent } from './countdown.component';
import { TestModule } from 'src/app/testing/test.module';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [CountdownComponent],
      imports: [TestModule], // Add MatDialogModule and HttpClientTestingModule
      providers: [
        { provide: MatDialog, useValue: mockDialog }, // Mock MatDialog
        CountdownService, // Provide CountdownService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
