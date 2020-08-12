import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SongDetailComponent} from "./components/song/song-detail/song-detail.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import {CreateSongComponent} from './components/songs/create-song/create-song.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginComponent} from './components/login/login.component';
import {ViewSongByUserComponent} from './components/view-song-by-user/view-song-by-user.component';
import {SongSearchingResultsComponent} from './components/song-searching-results/song-searching-results.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {authInterceptorProviders} from './helper/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
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
  ],
  providers: [authInterceptorProviders,{
    provide: APP_BASE_HREF, useValue: "/"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
