import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { UsersService } from '../../services/users/users.service'
import { IUser } from '../../interfaces/IUser'

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public title = 'Users'
  public users$: Observable<IUser[]> = null
  public selectedUser$: Observable<IUser> = null

  constructor(public service: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.service.getAll()
  }

  getById(id: number): void {
    this.selectedUser$ = this.service.getById(id)
  }
 }
