import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthModule} from '@auth0/auth0-angular';
import {NavigationComponent} from './navigation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          domain: 'irfc.eu.auth0.com',
          clientId: 'mzm9OU2EYqPFku9lrT4XiLn9yi9JOzWE',
        })
      ],
      declarations: [NavigationComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
