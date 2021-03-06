import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import set = Reflect.set;

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private auth: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(req);
  }
}
