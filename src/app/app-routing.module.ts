
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {ViewSongByUserComponent} from "./components/songs/songs-get-by-user/view-song-by-user.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {LoginComponent} from './components/login/login.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {SongSearchingResultsComponent} from "./components/songs/song-searching-results/song-searching-results.component";

const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'song/create', component: CreateSongComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/song-list', component: ViewSongByUserComponent},
  {path: "login", component: LoginComponent},
  {path: "edit-profile", component: EditProfileComponent},
  {path: 'song/create',component: CreateSongComponent},
  {path: 'search', component: SongSearchingResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
