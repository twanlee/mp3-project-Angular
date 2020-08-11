// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "edit-profile", component: EditProfileComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
