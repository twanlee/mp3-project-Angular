
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {ViewSongByUserComponent} from "./components/view-song-by-user/view-song-by-user.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {LoginComponent} from './components/login/login.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {SongSearchingResultsComponent} from "./components/song-searching-results/song-searching-results.component";
import { HomePageComponent } from './components/home-page/home-page.component';
import {SongDetailComponent} from './components/songs/song-detail/song-detail.component';

const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'song/create', component: CreateSongComponent},
  {path: 'user/song-list', component: ViewSongByUserComponent},
  {path: "login", component: LoginComponent},
  {path: "edit-profile", component: EditProfileComponent},
  {path: 'song/create',component: CreateSongComponent},
  {path: 'search', component: SongSearchingResultsComponent},
  {path: '', component: HomePageComponent},
  {path: 'song/:id/detail', component: SongDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
