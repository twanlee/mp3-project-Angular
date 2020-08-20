import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import {AllPlaylistComponent} from '../../components/playlists/all-playlist/all-playlist.component';
import {PlaylistDetailComponent} from '../../components/playlists/playlist-detail/playlist-detail.component';
import {AddSongComponent} from '../../components/playlists/add-song/add-song.component';
import {NewPlaylistComponent} from '../../components/playlists/new-playlist/new-playlist.component';
import {FindSongForPlaylistComponent} from '../../components/playlists/add-song/find-song-for-playlist/find-song-for-playlist.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {MatInputModule} from '@angular/material/input';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {ToastrModule} from 'ngx-toastr';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AllPlaylistComponent,
    PlaylistDetailComponent,
    AddSongComponent,
    NewPlaylistComponent,
    FindSongForPlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule,
    NgxPaginationModule,
    // BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    NgxAudioPlayerModule,
    ToastrModule.forRoot(),
    CKEditorModule,
    NgbModule
  ]
})
export class PlaylistModule { }
