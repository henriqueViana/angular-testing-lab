import { profileEnum } from 'src/app/enums/profiles.enum'
import { IUser } from '../../interfaces/IUser'

export class UsersServiceDummy {
  public getAll(): IUser[] {
    return [
      {
        id: 1,
        name: "Henrique",
        email: "henrique@gmail.com"
      },
      {
        id: 2,
        name: "Ana",
        email: "ana@company.com"
      },
      {
        id: 3,
        name: "tester",
        email: "tester@tester.com"
      }
    ]
  }

  public getAllWithProfile(): IUser[] {
    return [
      {
        id: 1,
        name: "Henrique",
        email: "henrique@gmail.com",
        profileType: profileEnum.READER
      },
      {
        id: 2,
        name: "Ana",
        email: "ana@company.com",
        profileType: profileEnum.ADMIN
      },
      {
        id: 3,
        name: "tester",
        email: "tester@tester.com",
        profileType: profileEnum.READER
      }
    ]
  }
}