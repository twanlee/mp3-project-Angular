import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from '../../components/home-page/home-page.component';
import {SongEditComponent} from '../../components/songs/song-edit/song-edit.component';
import {AuthGuard} from '../../authorization/auth-guard.service';
import {SongSearchingResultsComponent} from '../../components/songs/song-searching-results/song-searching-results.component';
import {SongDetailComponent} from '../../components/songs/song-detail/song-detail.component';
import {SongDeleteComponent} from '../../components/songs/song-delete/song-delete.component';
import {CreateSongComponent} from '../../components/songs/create-song/create-song.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':id/edit', component: SongEditComponent, canActivate: [AuthGuard] },
  { path: ':keyword/search', component: SongSearchingResultsComponent },
  { path: ':id/detail', component: SongDetailComponent },
  { path: ':id/delete', component: SongDeleteComponent },
  { path: 'create', component: CreateSongComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
