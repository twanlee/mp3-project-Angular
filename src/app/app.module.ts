import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SongDetailComponent} from "./components/songs/song-detail/song-detail.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginComponent} from './components/login/login.component';
import {ViewSongByUserComponent} from './components/songs/songs-get-by-user/view-song-by-user.component';
import {SongSearchingResultsComponent} from './components/songs/song-searching-results/song-searching-results.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {authInterceptorProviders} from './helper/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import { GreatestSongComponent } from './components/songs/greatest-song/greatest-song.component';
import { Top10songComponent } from './components/songs/top10song/top10song.component';
import { SongPlayerComponent } from './components/songs/song-player/song-player.component';
import { SongDescriptionComponent } from './components/songs/song-description/song-description.component';
import {SongEditComponent} from './components/songs/song-edit/song-edit.component';
import { SongDeleteComponent } from './components/songs/song-delete/song-delete.component';
<<<<<<< HEAD
import { CreateArtistComponent } from './components/artists/create-artist/create-artist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AllPlaylistComponent } from './components/playlists/all-playlist/all-playlist.component';
import { PlaylistDetailComponent } from './components/playlists/playlist-detail/playlist-detail.component';
>>>>>>> 7193000cdf1819bc60e9daa86601eea6b174fa71



@NgModule({
  declarations: [
    AppComponent,
    CreateSongComponent,
    LoginComponent,
    EditProfileComponent,
    RegisterComponent,
    ViewSongByUserComponent,
    SongSearchingResultsComponent,
    HeaderComponent,
    FooterComponent,
    SongDetailComponent,
    HomePageComponent,
    HomePageComponent,
    GreatestSongComponent,
    Top10songComponent,
    SongEditComponent,
    SongDeleteComponent,
    SongPlayerComponent,
    SongDescriptionComponent,
    SongEditComponent,
<<<<<<< HEAD
    CreateArtistComponent,
=======
    AllPlaylistComponent,
    PlaylistDetailComponent
>>>>>>> 7193000cdf1819bc60e9daa86601eea6b174fa71
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [authInterceptorProviders,{
    provide: APP_BASE_HREF, useValue: "/"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
