import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = environment.API_URL + "register";

  constructor(private http: HttpClient) {
  }

  registerUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url, data);
  }
}
