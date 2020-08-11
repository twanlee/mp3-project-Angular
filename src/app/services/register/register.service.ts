import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:8080/api/register";

  constructor(private http: HttpClient) {
  }

  registerUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url, data);
  }
}
