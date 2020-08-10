import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:8080/api/register";

  constructor(private http: HttpClient) {
  }

  registerUser(data: User): Observable<User> {
    return this.http.post<User>(this.url, data);
  }
}
