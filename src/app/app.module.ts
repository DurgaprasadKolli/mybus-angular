import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CookieService} from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchofficesComponent } from './branchoffices/branchoffices.component';
import { CitiesComponent } from './cities/cities.component';
import { AddAndEditBranchOfficeComponent } from './branchoffices/add-and-edit-branch-office/add-and-edit-branch-office.component';
import {ToastrModule} from 'ngx-toastr';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BranchofficesComponent,
    CitiesComponent,
    AddAndEditBranchOfficeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center'
    }), // ToastrModule added
    SweetAlert2Module.forRoot(),
    NgbModule,
    NgbPaginationModule
  ],
  exports: [BranchofficesComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
