import {Role} from '../role/role';

export interface IUserToken {
    id?: number;
    email?: string;
    role?: Role[];
    accessToken?: string;
    tokenType?: string;
}
