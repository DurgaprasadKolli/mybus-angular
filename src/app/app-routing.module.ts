import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_helpers/auth.guard';
import {BranchofficesComponent} from './branchoffices/branchoffices.component';
<<<<<<< HEAD
import {CitiesComponent} from './cities/cities.component';
=======
import {AddAndEditBranchOfficeComponent} from './branchoffices/add-and-edit-branch-office/add-and-edit-branch-office.component';
>>>>>>> 0156fddd131ab14a99119d6c9cfb385d94d929a4


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full',  component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'branchOffices', component: BranchofficesComponent},
<<<<<<< HEAD
  {path: 'cities', component: CitiesComponent},
=======
  {path: 'BranchOffice/add', component: AddAndEditBranchOfficeComponent},
  {path: 'BranchOffice/edit/:id', component: AddAndEditBranchOfficeComponent},
>>>>>>> 0156fddd131ab14a99119d6c9cfb385d94d929a4

  // otherwise redirect to home
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
