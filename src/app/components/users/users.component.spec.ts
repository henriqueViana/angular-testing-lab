import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { UsersComponent } from './users.component';
import { UsersService } from '../../services/users/users.service' 
import { UsersServiceStub } from '../../services/users/users.service.stub' 

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [{provide: UsersService, useClass: UsersServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a total of users equal to the total that came from the request', () => {
    const users = fixture.debugElement.queryAll(By.css('.user'))
    component.users$.subscribe(res => {
      expect(users.length).toEqual(res.length)
    })
  })

  it('should not render selected-user by default', () => {
    const user = fixture.debugElement.query(By.css('.selected-user'))
    expect(user).toBeNull()
  })

  it('should render selected-user after user is clicked and selected', () => {
    const user = fixture.debugElement.query(By.css('.user')).nativeElement
    user.click()
    
    fixture.detectChanges()

    const userSelected = fixture.debugElement.query(By.css('.selected-user'))
    expect(userSelected).not.toBeNull() 
  })

  it('should call getAll of UsersService on component Init', () => {
    spyOn(component.service, 'getAll').and.callThrough()
    component.ngOnInit()
    expect(component.service.getAll).toHaveBeenCalled()
  })

  it('should call getById with id prop when a user is clicked', () => {
    spyOn(component.service, 'getById').and.callThrough()
    const user = fixture.debugElement.query(By.css('.user')).nativeElement

    user.click()

    expect(component.service.getById).toHaveBeenCalledWith(1)
  })
});
