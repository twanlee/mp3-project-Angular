import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TestComponent } from './components/test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {authInterceptorProviders} from './helper/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ViewSongByUserComponent } from './components/view-song-by-user/view-song-by-user.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditProfileComponent,
    TestComponent,
    RegisterComponent,
    ViewSongByUserComponent
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
