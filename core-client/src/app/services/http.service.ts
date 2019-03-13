import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiConfig} from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

  get(url, options?, setContentType = true) {
    options = this.initOptions(options, setContentType);
    url = this.apiConfig.apiUrl + this.apiConfig.endpoint + url;
    return this.http.get(url, options);
  }

  post(url, body, options?, setContentType = true) {
    options = this.initOptions(options, setContentType);
    url = this.apiConfig.apiUrl + this.apiConfig.endpoint + url;
    return this.http.post(url, body, options);
  }

  patch(url, body, options?) {
    options = this.initOptions(options);
    url = this.apiConfig.apiUrl + this.apiConfig.endpoint + url;
    return this.http.patch(url, body, options);
  }

  put(url, body, options?) {
    options = this.initOptions(options);
    url = this.apiConfig.apiUrl + this.apiConfig.endpoint + url;
    return this.http.put(url, body, options);
  }

  delete(url, options?) {
    options = this.initOptions(options);
    url = this.apiConfig.apiUrl + this.apiConfig.endpoint + url;
    return this.http.delete(url, options);
  }

  private initOptions(options: any = {}, setContentType: boolean = true) {
    let headers = new HttpHeaders();
    if (setContentType) {
      headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    if (null) { // this.token add token if necessary
      options.headers = headers.append('Authorization', 'Bearer ' + null);
    }
    return options;
  }
}
