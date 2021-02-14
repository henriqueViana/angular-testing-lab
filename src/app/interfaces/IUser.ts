import { profileEnum } from '../enums/profiles.enum'

export interface IUser {
  id: number,
  name: string,
  email: string,
  profileType?: profileEnum
}