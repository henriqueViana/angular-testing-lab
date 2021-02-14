import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { IUser } from '../../interfaces/IUser';
import { profileEnum } from '../../enums/profiles.enum'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = 'http://localhost:3000/'
  private readonly uri = 'users/'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}${this.uri}`)
      .pipe(map(data => this.setProfile(data)))
  }

  public getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}${this.uri}${id}`)
  }

  public getUrl(): string {
    return `${this.baseUrl}${this.uri}`
  }

  private setProfile(res: IUser[]): IUser[] {
    const cloneResponse = res.map(user => {
      if (user.email.includes('@company.com')) {
        user.profileType = profileEnum.ADMIN
        return user
      }

      user.profileType = profileEnum.READER
      return user
    })

    return cloneResponse
  }
}
