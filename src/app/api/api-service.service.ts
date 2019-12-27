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

  get(url1): Observable<any> {
    return this.http.get(this.productUrl + url1, this.httpOptions);
  }
}
