import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';

import { WelcomeComponent } from './welcome.component';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User' };
}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        WelcomeComponent,
        { provide: UserService, useClass: MockUserService },
      ],
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have welcome message after construction', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(userService.user.name);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;
    component.ngOnInit();
    expect(component.welcome).not.toContain(userService.user.name);
    expect(component.welcome).toContain('log in');
  });
});
