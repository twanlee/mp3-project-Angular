import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISong} from '../../interfaces/isong';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  url_api = 'http://localhost:8080/api/song';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api + '/list');
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<ISong>(this.url_api + '/' + id + '/detail');
  }

  saveSong(data: ISong,user_id: number): Observable<ISong> {
    return this.http.post<ISong>(this.url_api+'/'+user_id + '/save', data);
  }

  sendUserID(user_id: number): Observable<string> {
    return this.http.post<string>(this.url_api + '/user_id', user_id);
  }

  deleteSongById(id: number): Observable<any> {
    return this.http.delete<any>(this.url_api + '/' + id + '/delete');
  }

  getSongByName(nameSong: string): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api + '/' + nameSong + '/search');
  }

  getTop10Song(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api + '/topten');
  }

  getTop6Song(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api + '/topsix');
  }

  getAllSongsName(): Observable<string[]> {
    return this.http.get<string[]>(this.url_api + '/name');
  }

  getAllSongByUser(id: number): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.url_api + '/' + id + '/songs');
  }
}
