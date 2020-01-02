import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_helpers/auth.guard';
import {BranchofficesComponent} from './branchoffices/branchoffices.component';
import {CitiesComponent} from './cities/cities.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full',  component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'branchOffices', component: BranchofficesComponent},
  {path: 'cities', component: CitiesComponent},

  // otherwise redirect to home
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
