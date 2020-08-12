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
  firstName = this.tokenStorage.getUser();
  lastName = this.tokenStorage.getUser();
  currentBefore = '';
  constructor(private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    this.authenticationService.login(this.userForm).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.firstName = this.tokenStorage.getUser().firstName;
        this.lastName = this.tokenStorage.getUser().lastName;
        this.currentBefore = this.tokenStorage.getUrl();
        this.router.navigate(["/"]).then(result=>{window.location.href = this.currentBefore;});
      },
      err => {
        this.errorMessage = 'Vui lòng kiểm tra lại Email và Password';
        this.isLoginFailed = true;
      }
    );
  }

  logOut() {
    this.tokenStorage.singOut();
    window.location.reload();
  }

}
