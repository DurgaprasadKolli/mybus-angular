import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {ApiServiceService} from './api/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mybus-angular';
  private currentDate = new Date();
  private currentAccessToken: any;
  private currentUserDetails = {
    userName: ''
  };

  constructor(private loginService: AuthenticationService,
              private apiService: ApiServiceService,
              private cookieService: CookieService,
              private router: Router) {
    this.loginService.currentAccessToken.subscribe((x: any) => {
      console.log(x);
      if (x) {
        this.loginService.get('/api/v1/user/me').subscribe((response: any) => {
          this.currentUserDetails = response;
        }, (error) => {

        });
      }
      this.currentAccessToken = x;
    });
  }

  ngOnInit() {}

  logOutUser() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
}
