import {Role} from "../role/role";

export interface User {
  id?: number;
  email?: string;
  password?: string;
  role?: Role
}
