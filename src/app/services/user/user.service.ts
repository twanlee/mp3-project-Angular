import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/user/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISong} from "../../interfaces/isong";
import {IProfile} from '../../interfaces/user/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_USER_URL = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<any> {
    return this.http.get<IUser[]>(this.API_USER_URL + 'list');
  }
  URL_GET_ALL_SONG = "http://localhost:8080/api/user/";

  getAllSongByUser(id: number): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.URL_GET_ALL_SONG+ id + "/songs")
  }
  getProfileByUserId(id: number): Observable<any> {
    return this.http.get<IProfile>(this.API_USER_URL + id + '/profile')
  }
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.API_USER_URL + id +'/detail')
  }
  editProfileByUserId(id: number, profile: IProfile): Observable<IProfile> {
    return this.http.put<IProfile>(this.API_USER_URL + id + '/edit', profile)
  }
}
