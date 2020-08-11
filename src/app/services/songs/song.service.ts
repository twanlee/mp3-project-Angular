import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISong} from '../../interfaces/isong';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  url_api = 'http://localhost:8080/api/song'
  constructor(private http: HttpClient) { }
  getAll(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api);
  }
  getSongById(id: number): Observable<any>{
    return this.http.get<ISong>(this.url_api+'/'+id+'/detail');
  }
  createSong(data: ISong): Observable<ISong>{
    return this.http.post<ISong>(this.url_api,data);
  }
  deleteSongById(id: number): Observable<any>{
    return this.http.delete<any>(this.url_api+'/'+id+'/delete');
  }
}
