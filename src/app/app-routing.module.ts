import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {CreateSongComponent} from './components/songs/create-song/create-song.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "edit-profile", component: EditProfileComponent},
  {path: 'song/create',component: CreateSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
