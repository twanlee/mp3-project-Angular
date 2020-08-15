import { Injectable } from '@angular/core';
import {IPlaylist} from '../../interfaces/iplaylist';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISong} from '../../interfaces/isong';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  PLAYLIST_API = "http://localhost:8080/api/playlist/";

  constructor(private http: HttpClient) { }

  getPlayList(): Observable<IPlaylist[]>{
      return this.http.get<IPlaylist[]>(this.PLAYLIST_API + "all")
  }
  getPlayListById(id: number): Observable<IPlaylist> {
      return this.http.get<IPlaylist>(this.PLAYLIST_API + id+"/detail");
  }
  getSongFromPlaylist(id: number): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.PLAYLIST_API + id + "/songs")
  }
  createPlaylist(data: IPlaylist,user_id: number): Observable<IPlaylist>{
    return this.http.post<IPlaylist>(this.PLAYLIST_API + user_id+'/create',data)
  }
}
