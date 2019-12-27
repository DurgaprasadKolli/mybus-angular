import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  mainUrl = 'http://localhost:8090';
  private currentAccessTokenSubject: BehaviorSubject<any>;
  public currentAccessToken: Observable<any>;
  private httpOptions: { headers: { Authorization: string } };

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
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
        this.currentAccessTokenSubject.next(response);
      }
      return response;
    }));
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
