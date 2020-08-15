import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IArtist} from '../../interfaces/iartist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  url_api = 'http://localhost:8080/api/artist';
  constructor(private http: HttpClient) { }
  getAll(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(this.url_api + '/list');
  }

  getArtistById(id: number): Observable<any> {
    return this.http.get<IArtist>(this.url_api + '/' + id + '/detail');
  }

  saveArtist(data: IArtist): Observable<IArtist> {
    return this.http.post<IArtist>(this.url_api + '/save', data);
  }

  deleteArtistById(id: number): Observable<any> {
    return this.http.delete<any>(this.url_api + '/' + id + '/delete');
  }
}
