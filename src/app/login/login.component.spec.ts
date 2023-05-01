import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpStatusCode } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [NO_ERRORS_SCHEMA], 
      imports: [HttpClientModule, MatDialogModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`should have as title 'the title'`, () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toContain('the title')});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
