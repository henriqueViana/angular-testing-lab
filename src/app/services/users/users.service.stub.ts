import { Observable, of } from 'rxjs'
import { IUser } from '../../interfaces/IUser'

export class UsersServiceStub {
  public getAll(): Observable<IUser[]> {
    return of([
      {
        id: 1,
        name: "Henrique",
        email: "henrique@gmail.com" 
      },
      {
        id: 2,
        name: "Ana",
        email: "ana@company.com" 
      }
    ])
  }

  public getById(id: number): Observable<IUser> {
    return of(
      {
        id: 1,
        name: "Henrique",
        email: "henrique@gmail.com" 
      }
    )
  }
}