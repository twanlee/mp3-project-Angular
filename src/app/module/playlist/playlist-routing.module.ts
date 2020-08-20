import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPlaylistComponent} from '../../components/playlists/all-playlist/all-playlist.component';
import {PlaylistDetailComponent} from '../../components/playlists/playlist-detail/playlist-detail.component';
import {AddSongComponent} from '../../components/playlists/add-song/add-song.component';
import {AuthGuard} from '../../authorization/auth-guard.service';
import {NewPlaylistComponent} from '../../components/playlists/new-playlist/new-playlist.component';


const routes: Routes = [
  {path: 'all', component: AllPlaylistComponent},
  {path: ':id/detail', component: PlaylistDetailComponent, runGuardsAndResolvers: 'always'},
  {path: ':id/song/add', component: AddSongComponent, canActivate: [AuthGuard]},
  {path: 'create', component: NewPlaylistComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
