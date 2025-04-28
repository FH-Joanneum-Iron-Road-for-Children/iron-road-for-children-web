import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedContentPageComponent } from './shared-content-page.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { TestModule } from 'src/app/testing/test.module';
import { AuthService } from '@auth0/auth0-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs'; // Import 'of' to create mock observables

describe('SharedContentPageComponent', () => {
  let component: SharedContentPageComponent;
  let fixture: ComponentFixture<SharedContentPageComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', [
      'loginWithRedirect',
      'logout',
    ]);
    // Use Object.defineProperty to mock the read-only isAuthenticated$ property
    Object.defineProperty(mockAuthService, 'isAuthenticated$', {
      value: of(true),
    });

    await TestBed.configureTestingModule({
      declarations: [SharedContentPageComponent, NavigationComponent],
      imports: [TestModule], // Use the shared TestModule
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add any necessary schemas here
      providers: [
        { provide: AuthService, useValue: mockAuthService }, // Provide a mock for AuthService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
