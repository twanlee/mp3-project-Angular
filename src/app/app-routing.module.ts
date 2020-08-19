
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/user/register/register.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {LoginComponent} from './components/user/login/login.component';
import {EditProfileComponent} from './components/user/edit-profile/edit-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {SongDetailComponent} from './components/songs/song-detail/song-detail.component';
import {ViewSongByUserComponent} from './components/songs/songs-get-by-user/view-song-by-user.component';
import {SongSearchingResultsComponent} from './components/songs/song-searching-results/song-searching-results.component';
import {SongEditComponent} from './components/songs/song-edit/song-edit.component';
import {CreateArtistComponent} from './components/artists/create-artist/create-artist.component';
import {AllPlaylistComponent} from './components/playlists/all-playlist/all-playlist.component';
import {PlaylistDetailComponent} from './components/playlists/playlist-detail/playlist-detail.component';
import {NewPlaylistComponent} from './components/playlists/new-playlist/new-playlist.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {UserSongsAndPlaylistComponent} from './components/user/user-songs-and-playlist/user-songs-and-playlist.component';
import {AddSongComponent} from './components/playlists/add-song/add-song.component';
import {TopTrendingComponent} from './components/tops/top-trending/top-trending.component';
import {SongDeleteComponent} from './components/songs/song-delete/song-delete.component';
import {ChangePasswordComponent} from './components/user/change-password/change-password.component';


const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'song/create', component: CreateSongComponent},
  {path: 'user/songs', component: ViewSongByUserComponent},
  {path: "login", component: LoginComponent},
  {path: "user/:id/profile/edit", component: EditProfileComponent},
  {path: "user/:id/profile", component: UserProfileComponent},
  {path: 'song/:id/edit', component: SongEditComponent},
  {path: ':keyword/search', component: SongSearchingResultsComponent},
  {path: '', component: HomePageComponent},
  {path: 'song/:id/detail', component: SongDetailComponent},
  {path: 'artist/create', component: CreateArtistComponent},
  {path: 'playlist/all', component: AllPlaylistComponent},
  {path: 'playlist/:id/detail', component: PlaylistDetailComponent},
  {path: 'user/music', component: UserSongsAndPlaylistComponent},
  {path: 'playlist/create', component: NewPlaylistComponent},
  {path: 'playlist/:id/song/add', component: AddSongComponent},
  {path: 'user/music', component: UserSongsAndPlaylistComponent},
  {path: 'playlist/create', component: NewPlaylistComponent},
  {path: 'top', component: TopTrendingComponent},
  {path: 'song/:id/delete', component: SongDeleteComponent},
  {path: 'password/update', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
