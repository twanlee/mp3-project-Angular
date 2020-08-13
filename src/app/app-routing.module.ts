
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {LoginComponent} from './components/login/login.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {SongDetailComponent} from './components/songs/song-detail/song-detail.component';
import {ViewSongByUserComponent} from './components/songs/songs-get-by-user/view-song-by-user.component';
import {SongSearchingResultsComponent} from './components/songs/song-searching-results/song-searching-results.component';
import {SongEditComponent} from './components/songs/song-edit/song-edit.component';
import {AllPlaylistComponent} from './components/playlists/all-playlist/all-playlist.component';
import {PlaylistDetailComponent} from './components/playlists/playlist-detail/playlist-detail.component';


const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'song/create', component: CreateSongComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/songs', component: ViewSongByUserComponent},
  {path: "login", component: LoginComponent},
  {path: ":id/profile/edit", component: EditProfileComponent},
  {path: 'search', component: SongSearchingResultsComponent},
  {path: 'song/:id/edit', component: SongEditComponent},
  {path: 'song/:id/edit', component: SongEditComponent},
  {path: '', component: HomePageComponent},
  {path: 'song/:id/detail', component: SongDetailComponent},
  {path: 'playlist/all', component: AllPlaylistComponent},
  {path: 'playlist/:id', component: PlaylistDetailComponent},
  {path: 'playlist/all/playlist/:id', component: PlaylistDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
