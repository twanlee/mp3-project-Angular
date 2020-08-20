import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {RegisterComponent} from '../../components/user/register/register.component';
import {LoginComponent} from '../../components/user/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../../material.module';
import {MatInputModule} from '@angular/material/input';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    ToastrModule.forRoot(),
    NgbModule
  ]
})
export class AuthenticationModule { }
