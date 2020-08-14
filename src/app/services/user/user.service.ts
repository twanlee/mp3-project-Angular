import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/user/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISong} from '../../interfaces/isong';

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

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.API_URL + id + '/detail');
  }
}
