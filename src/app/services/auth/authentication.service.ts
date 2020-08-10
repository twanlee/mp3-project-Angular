import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user/user';
import {UserToken} from '../../interfaces/user/user-token';
import {map, tap} from 'rxjs/operators';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: Observable<User>;
  constructor(private http: HttpClient,
              private userService: UserService) { }

  login(user: User): Observable<UserToken> {
      return this.http.post<UserToken>("http://localhost:8080/login", user)
  }
}
