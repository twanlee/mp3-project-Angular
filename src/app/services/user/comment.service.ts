import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../../interfaces/icomment';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private API_COMMENT_URL = environment.API_URL + 'comment/';

  constructor(private http: HttpClient) {
  }

  getAllCommentBySongId(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.API_COMMENT_URL + id + '/list');
  }

  createCommentInSong(userId: number, songId: number, data: IComment): Observable<IComment> {
    return this.http.post<IComment>(this.API_COMMENT_URL + userId + '/' + songId, data);
  }
}
