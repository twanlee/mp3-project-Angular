import { Component, OnInit } from '@angular/core';
import {Role} from '../../interfaces/role/role';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../interfaces/user/user';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  email = this.tokenStorage.getUser();
  constructor(private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.email = this.tokenStorage.getUser().email;
    }
  }

  onSubmit() {
    this.authenticationService.login(this.userForm).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.email = this.tokenStorage.getUser().email;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logOut() {
    this.tokenStorage.singOut();
    window.location.reload();
  }

}
