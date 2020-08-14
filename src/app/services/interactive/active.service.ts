import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReview} from '../../interfaces/ireview';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor(private http: HttpClient) { }

  public getReviewBySong(songId: number): Observable<IReview> {
      return this.http.get<IReview>("http://localhost:8080/getReview/"+songId)
  }

  public likeSong(songId: number, userId: number): Observable<IReview> {
      return this.http.get<IReview>("http://localhost:8080/likeSong/"+songId+"/"+userId);
  }

}
