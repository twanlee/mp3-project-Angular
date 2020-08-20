import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserProfileComponent} from '../../components/user/user-profile/user-profile.component';
import {EditProfileComponent} from '../../components/user/edit-profile/edit-profile.component';
import {UserSongsAndPlaylistComponent} from '../../components/user/user-songs-and-playlist/user-songs-and-playlist.component';
import {ChangePasswordComponent} from '../../components/user/change-password/change-password.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {MatInputModule} from '@angular/material/input';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {ToastrModule} from 'ngx-toastr';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ViewSongByUserComponent} from '../../components/songs/songs-get-by-user/view-song-by-user.component';
import {UserPlaylistComponent} from '../../components/playlists/user-playlist/user-playlist.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent,
    UserSongsAndPlaylistComponent,
    ChangePasswordComponent,
    ViewSongByUserComponent,
    UserPlaylistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
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
export class UserModule { }
