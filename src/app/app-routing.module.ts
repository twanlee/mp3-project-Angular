// @ts-ignore
import {NgModule} from "@angular/core";
// @ts-ignore
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {ViewSongByUserComponent} from "./components/view-song-by-user/view-song-by-user.component";
// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user/song-list',
    component: ViewSongByUserComponent
  },{path: "login", component: LoginComponent}

];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
