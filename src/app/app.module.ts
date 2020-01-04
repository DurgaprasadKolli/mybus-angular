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
<<<<<<< HEAD
import { CitiesComponent } from './cities/cities.component';
=======
import { AddAndEditBranchOfficeComponent } from './branchoffices/add-and-edit-branch-office/add-and-edit-branch-office.component';
>>>>>>> 0156fddd131ab14a99119d6c9cfb385d94d929a4

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BranchofficesComponent,
<<<<<<< HEAD
    CitiesComponent,
=======
    AddAndEditBranchOfficeComponent,
>>>>>>> 0156fddd131ab14a99119d6c9cfb385d94d929a4
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports: [BranchofficesComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
