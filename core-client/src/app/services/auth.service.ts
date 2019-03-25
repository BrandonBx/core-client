import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {User} from '../models/user';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }

  login(username: string, password: string): Observable<string>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<string>('http://localhost:8000/login_check', {username, password}, httpOptions).pipe(
      map(res => res)
    )
  }

  getCurrUser(token: string): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })
    };

    return this.http.get<User>('http://localhost:8000/api/curr_user', httpOptions).pipe(
      map(res => res)
    )
  }
}
