import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from '../../components/user/register/register.component';
import {LoginComponent} from '../../components/user/login/login.component';


const routes: Routes = [
  {path: '', component: RegisterComponent},
  // {path: '', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
