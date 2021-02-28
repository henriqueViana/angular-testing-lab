import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UsersService } from './users.service';
import { UsersServiceDummy } from './users.service.dummy'

describe('UsersService', () => {
  let service: UsersService
  let httpMock: HttpTestingController
  let dummy: UsersServiceDummy

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController)
    dummy = new UsersServiceDummy()
  });

  afterEach(() => httpMock.verify())

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user list when getAll is called', () => {
    const dummyUsers = dummy.getAll()
    const dummyUsersProfile = dummy.getAllWithProfile()

    service.getAll().subscribe(users => {
      expect(users).toEqual(dummyUsersProfile)
    })

    const req = httpMock.expectOne(service.getUrl())  
    expect(req.request.method).toBe('GET')
    req.flush(dummyUsers)
  })
});
