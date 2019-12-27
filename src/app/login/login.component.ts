import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {first} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInTitle = 'Login';

  userLoginDetails = {
    userName: '',
    password: ''
  };
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: AuthenticationService) {
    if (this.loginService.currentAccessTokenValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  checkLogin() {
    this.loginService.logIn(this.userLoginDetails)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        }, error => {}
      );
  }

}
