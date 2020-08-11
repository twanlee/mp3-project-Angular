import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISong} from "../../interfaces/songs/song";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserService {
  URL_GET_ALL_SONG = "http://localhost:8080/api/user/";
  constructor(
    private http: HttpClient
  ) { }

  getAllSongByUser(id: number): Observable<ISong[]>{
    return this.http.get<ISong[]>(this.URL_GET_ALL_SONG+id+"/get-songs")
  }

}
