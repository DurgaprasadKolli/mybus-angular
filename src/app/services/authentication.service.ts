import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, retry} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  mainUrl = 'http://localhost:8090';
  private currentAccessTokenSubject: BehaviorSubject<any>;
  public currentAccessToken: Observable<any>;
  private httpOptions: { headers: { Authorization: string } };

  handleError(error) {
    if (error.status === 500) {
      console.log('if', error);
      this.toastrService.error('Thank you' + error.error.message, 'Error');
      this.toastrService.error('Thank you', 'Error', {
        timeOut: 300000000000
      });
    } else {
      console.log('else', error);
    }
    // console.log(error)
    // if (error.error instanceof ErrorEvent) {
    //   // client-side error
    //   errorMessage = `Error: ${error.error.message}`;
    //   console.log('if', errorMessage);
    // } else {
    //   // server-side error
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //   console.log('else', errorMessage);
    // }
    return throwError(error);
  }

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private toastrService: ToastrService) {
    this.currentAccessTokenSubject = new BehaviorSubject<any>(this.cookieService.get('accessToken'));
    this.currentAccessToken = this.currentAccessTokenSubject.asObservable();
  }

  public get currentAccessTokenValue(): any {
    return this.currentAccessTokenSubject.value;
  }

  logIn(loginDetails) {
    return this.http.post(this.mainUrl + '/api/auth/signin', loginDetails).pipe(map((response: any) => {
      if (response) {
        this.cookieService.set('accessToken', response.tokenType + ' ' + response.accessToken);
        this.toastrService.success('Thank you', 'Success');
        this.currentAccessTokenSubject.next(response);
      }
      return response;
    }), catchError(this.handleError));
  }

  get(url1): Observable<any> {
    return this.http.get(this.mainUrl + url1,
      this.httpOptions = {
        headers: {
          Authorization: this.cookieService.get('accessToken')
        }
      });
  }

  logOut() {
    this.cookieService.delete('accessToken');
    this.currentAccessTokenSubject.next(null);
  }
}
