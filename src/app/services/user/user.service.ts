import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/user/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getUserList():Observable<any>{
    return this.http.get(this.API_URL+'users', {responseType: 'text'});
  }

  // createUser(data: IUser):Observable<any>{
  //   return this.http.post(this.API_URL+'register',data,{responseType: 'text'})
  // }
}
