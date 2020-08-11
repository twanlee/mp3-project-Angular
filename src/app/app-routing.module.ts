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
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {LoginComponent} from './components/login/login.component';
import {SongSearchingResultsComponent} from "./components/song-searching-results/song-searching-results.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user/song-list',
    component: ViewSongByUserComponent
  },{path: "login", component: LoginComponent},
  {path: 'song/create',component: CreateSongComponent},
  {
    path: 'search',
    component: SongSearchingResultsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
