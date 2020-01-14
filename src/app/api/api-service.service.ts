import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {catchError, retry} from 'rxjs/operators';

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

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      console.log('if', errorMessage);
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log('else', errorMessage);
    }
    return throwError(errorMessage);
  }

  get(url1, params?: any): Observable<any> {
    const option = {
      headers: {
        Authorization: this.cookieService.get('accessToken')
      },
      params
    };
    return this.http.get(this.productUrl + url1, option).pipe(retry(1), catchError(this.handleError));
  }

  post(url1, data?: any): Observable<any> {
    return this.http.post(this.productUrl + url1, data, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  put(url1, data?: any): Observable<any> {
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
