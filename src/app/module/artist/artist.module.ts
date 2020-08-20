import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import {CreateArtistComponent} from '../../components/artists/create-artist/create-artist.component';
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


@NgModule({
  declarations: [
    CreateArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
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
export class ArtistModule { }
