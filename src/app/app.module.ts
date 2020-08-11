import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {authInterceptorProviders} from './helper/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ViewSongByUserComponent } from './components/view-song-by-user/view-song-by-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import { SongSearchingResultsComponent } from './components/song-searching-results/song-searching-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditProfileComponent,
    RegisterComponent,
    ViewSongByUserComponent,
    SongSearchingResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders,{
    provide: APP_BASE_HREF, useValue: "/"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
