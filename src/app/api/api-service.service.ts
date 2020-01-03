import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public productUrl = 'http://localhost:8090';
  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  httpOptions = {
    headers: {
      Authorization: this.cookieService.get('accessToken')
    }
  };

  get(url1, params?: any): Observable<any> {
    const option = {
      headers: {
        Authorization: this.cookieService.get('accessToken')
      },
      params
    };
    return this.http.get(this.productUrl + url1, option);
  }

  post(url1, data?: any): Observable<any> {
    console.log(url1, data)
    return this.http.post(this.productUrl + url1, data, this.httpOptions);
  }

  put(url1, data?: any): Observable<any> {
    console.log(url1, data)
    return this.http.put(this.productUrl + url1, data, this.httpOptions);
  }

  delete(url1, params?: any): Observable<any> {
    const option = {
      headers: {
        Authorization: this.cookieService.get('accessToken')
      },
      params
    };
    return this.http.delete(this.productUrl + url1, option);
  }
}
