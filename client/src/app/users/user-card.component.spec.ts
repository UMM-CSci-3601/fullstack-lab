import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './user-card.component';
import { User } from './user';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let expectedUser: User;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        UserCardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    TestBed.runInInjectionContext(() => {
      expectedUser = {
        _id: 'chris_id',
        name: 'Chris',
        age: 25,
        company: 'UMM',
        email: 'chris@this.that',
        role: 'admin',
        avatar: 'https://gravatar.com/avatar/8c9616d6cc5de638ea6920fb5d65fc6c?d=identicon'
      };
    });
    fixture.componentRef.setInput('user', expectedUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be associated with the correct user', () => {
    expect(component.user()).toEqual(expectedUser);
  });

  it('should be the user named Chris', () => {
    expect(component.user().name).toEqual('Chris');
  });
});
