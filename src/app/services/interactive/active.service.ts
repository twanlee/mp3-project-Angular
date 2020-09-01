import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReview} from '../../interfaces/ireview';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor(private http: HttpClient) {
  }

  public getReviewBySong(songId: number): Observable<IReview> {
    return this.http.get<IReview>(environment.AUTHEN_URL + "getReview/song/" + songId);
  }

  public likeSong(songId: number, userId: number): Observable<IReview> {
    return this.http.get<IReview>(environment.AUTHEN_URL + "likeSong/" + songId + "/" + userId);
  }

  public getReviewByPlaylist(playlistId: number): Observable<IReview> {
    return this.http.get<IReview>(environment.AUTHEN_URL + "getReview/song/" + playlistId);
  }

  public likePlaylist(playlistId: number, userId: number): Observable<IReview> {
    return this.http.get<IReview>(environment.AUTHEN_URL + "likePlaylist/" + playlistId + "/" + userId);
  }

}
