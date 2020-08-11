import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/user/user';
import {IUserToken} from '../interfaces/user/user-token';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'user';

  constructor() { }

  singOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user: IUserToken) {
    window.localStorage.removeItem(this.USER_KEY);
    window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    window.localStorage.setItem("userId",user.id.toString())
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }
}
