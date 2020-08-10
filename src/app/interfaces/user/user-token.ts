import {Role} from '../role/role';

export interface UserToken {
    id?: number;
    email?: string;
    role?: Role[];
    accessToken?: string;
    tokenType?: string;
}
