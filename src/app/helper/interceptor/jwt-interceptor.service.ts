import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem("token")){
      let token = "Bearer " +  localStorage.getItem("token");
      req = req.clone({
        setHeaders : {
            Authorization: token
        }
      })
    }
    return next.handle(req);
  }

  constructor() { }
}
