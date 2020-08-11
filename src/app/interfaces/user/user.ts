import {Role} from '../role/role';

export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  role?: Role;
}
