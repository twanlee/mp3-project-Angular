import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SongDetailComponent} from './components/songs/song-detail/song-detail.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginComponent} from './components/user/login/login.component';
import {ViewSongByUserComponent} from './components/songs/songs-get-by-user/view-song-by-user.component';
import {SongSearchingResultsComponent} from './components/songs/song-searching-results/song-searching-results.component';
import {EditProfileComponent} from './components/user/edit-profile/edit-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {authInterceptorProviders} from './helper/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import { GreatestSongComponent } from './components/songs/greatest-song/greatest-song.component';
import { Top10songComponent } from './components/songs/top10song/top10song.component';
import { SongPlayerComponent } from './components/songs/song-player/song-player.component';
import { SongDescriptionComponent } from './components/songs/song-description/song-description.component';
import {SongEditComponent} from './components/songs/song-edit/song-edit.component';
import { SongDeleteComponent } from './components/songs/song-delete/song-delete.component';
import { AllPlaylistComponent } from './components/playlists/all-playlist/all-playlist.component';
import { PlaylistDetailComponent } from './components/playlists/playlist-detail/playlist-detail.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { SearchSongFormComponent } from './components/songs/search-song-form/search-song-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatInputModule} from "@angular/material/input";
import {CreateArtistComponent} from "./components/artists/create-artist/create-artist.component";
import {AddAuthorComponent} from './components/songs/create-song/add-author/add-author.component';
import {AddSingerComponent} from './components/songs/create-song/add-singer/add-singer.component';
import { UserPlaylistComponent } from './components/playlists/user-playlist/user-playlist.component';
import {NewPlaylistComponent} from './components/playlists/new-playlist/new-playlist.component';
import { AddSongComponent } from './components/playlists/add-song/add-song.component';
import { FindSongForPlaylistComponent } from './components/playlists/add-song/find-song-for-playlist/find-song-for-playlist.component';
import {UserSongsAndPlaylistComponent} from './components/user/user-songs-and-playlist/user-songs-and-playlist.component';
import {CommentComponent} from './components/user/comment/comment.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import { TopLikeSongComponent } from './components/songs/top-like-song/top-like-song.component';
import { TopViewSongComponent } from './components/songs/top-view-song/top-view-song.component';
import { TopLikePlaylistComponent } from './components/playlists/top-like-playlist/top-like-playlist.component';
import { TopViewPlaylistComponent } from './components/playlists/top-view-playlist/top-view-playlist.component';
import { TopTrendingComponent } from './components/tops/top-trending/top-trending.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {ISong} from './interfaces/isong';
import {StorageService} from './services/storage.service';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function getPostTimeToString(postTime):string {
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
}


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
    GreatestSongComponent,
    Top10songComponent,
    SongEditComponent,
    SongDeleteComponent,
    SongPlayerComponent,
    SongDescriptionComponent,
    CreateArtistComponent,
    AllPlaylistComponent,
    PlaylistDetailComponent,
    UserProfileComponent,
    SearchSongFormComponent,
    AddAuthorComponent,
    SearchSongFormComponent,
    CreateArtistComponent,
    AddAuthorComponent,
    AddSingerComponent,
    NewPlaylistComponent,
    AddSongComponent,
    FindSongForPlaylistComponent,
    UserPlaylistComponent,
    UserSongsAndPlaylistComponent,
    CommentComponent,
    NewPlaylistComponent,
    TopLikeSongComponent,
    TopViewSongComponent,
    TopLikePlaylistComponent,
    TopViewPlaylistComponent,
    TopTrendingComponent,
    ChangePasswordComponent
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
    MaterialModule,
    MatInputModule,
    NgxAudioPlayerModule,
    ToastrModule.forRoot(),
    CKEditorModule,
    NgbModule
  ],
  providers: [authInterceptorProviders,{
    provide: APP_BASE_HREF, useValue: "/"
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
