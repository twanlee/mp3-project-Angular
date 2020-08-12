import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/user/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISong} from "../../interfaces/isong";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<any> {
    return this.http.get(this.API_URL + 'users', {responseType: 'text'});
  }

  URL_GET_ALL_SONG = "http://localhost:8080/api/user/";

  getAllSongByUser(id: number): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.URL_GET_ALL_SONG+"user/" + id + "/songs")
  }

}
