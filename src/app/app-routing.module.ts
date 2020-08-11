import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSongComponent} from './components/songs/create-song/create-song.component';

const routes: Routes = [
  {path: 'song/create',component: CreateSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
