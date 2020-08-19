import { Injectable } from '@angular/core';
import {IUserToken} from '../interfaces/user/user-token';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'user';
  private URL_KEY = 'urlPrevious';
  private REGISTERED_KEY = 'registered';

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }
  public saveUrl(currentUrl: string) {
    window.localStorage.removeItem(this.URL_KEY);
    window.localStorage.setItem(this.URL_KEY, currentUrl);
  }
  public getUrl(): string {
    return localStorage.getItem(this.URL_KEY);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public saveRegistered(isSuccessful: boolean) {
    window.localStorage.removeItem(this.REGISTERED_KEY);
    window.localStorage.setItem(this.REGISTERED_KEY, String(isSuccessful));
  }

  public getRegistered() {
    return localStorage.getItem(this.REGISTERED_KEY);
  }

  public saveUser(user: IUserToken) {
    window.localStorage.removeItem(this.USER_KEY);
    window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    window.localStorage.setItem("userId",user.id.toString());
    window.localStorage.setItem("firstName",user.firstName.toString());
    window.localStorage.setItem("lastName",user.lastName.toString());
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }
}
