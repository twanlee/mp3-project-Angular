import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import {HomePageComponent} from '../../components/home-page/home-page.component';
import {SongEditComponent} from '../../components/songs/song-edit/song-edit.component';
import {SongSearchingResultsComponent} from '../../components/songs/song-searching-results/song-searching-results.component';
import {SongDetailComponent} from '../../components/songs/song-detail/song-detail.component';
import {SongDeleteComponent} from '../../components/songs/song-delete/song-delete.component';
import {CreateSongComponent} from '../../components/songs/create-song/create-song.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {MatInputModule} from '@angular/material/input';
import {ToastrModule} from 'ngx-toastr';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GreatestSongComponent} from '../../components/songs/greatest-song/greatest-song.component';
import {Top10songComponent} from '../../components/songs/top10song/top10song.component';
import {AddSingerComponent} from '../../components/songs/create-song/add-singer/add-singer.component';
import {AddAuthorComponent} from '../../components/songs/create-song/add-author/add-author.component';
import {SongPlayerComponent} from '../../components/songs/song-player/song-player.component';
import {SongDescriptionComponent} from '../../components/songs/song-description/song-description.component';
import {CommentComponent} from '../../components/user/comment/comment.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    HomePageComponent,
    SongEditComponent,
    SongSearchingResultsComponent,
    SongDetailComponent,
    SongDeleteComponent,
    CreateSongComponent,
    GreatestSongComponent,
    Top10songComponent,
    AddSingerComponent,
    AddAuthorComponent,
    SongPlayerComponent,
    SongDescriptionComponent,
    CommentComponent
  ],
    imports: [
        CommonModule,
        SongRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        // BrowserAnimationsModule,
        MaterialModule,
        MatInputModule,
        ToastrModule.forRoot(),
        CKEditorModule,
        NgbModule,
        NgxPaginationModule
    ]
})
export class SongModule { }
