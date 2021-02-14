import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = 'http://localhost:3000/'
  private readonly uri = 'users/'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}${this.uri}`)
  }

  public getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}${this.uri}${id}`)
  }
}
