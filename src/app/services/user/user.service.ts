import { Injectable } from '@angular/core';
import {User} from '../../interfaces/user/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // findByUserName(): Observable<User> {
  //     return this.http.get("")
  // }
}
