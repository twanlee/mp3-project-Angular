import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/auth/authentication.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../services/token-storage.service';
import {IUser} from '../../../interfaces/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: IUser = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  firstName = this.tokenStorage.getUser();
  lastName = this.tokenStorage.getUser();
  currentBefore = '';
  isSuccessful: string;
  mess = 'Bạn đã đăng nhập';
  constructor(private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.isSuccessful = this.tokenStorage.getRegistered();
  }

  onSubmit() {
    this.authenticationService.login(this.userForm).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.firstName = this.tokenStorage.getUser().firstName;
        this.lastName = this.tokenStorage.getUser().lastName;
        this.currentBefore = this.tokenStorage.getUrl();
        // this.router.navigate(["/"]).then(result=>{window.location.href = this.currentBefore;});
        this.router.navigate(["/"]);
      },
      err => {
        this.errorMessage = 'Vui lòng kiểm tra lại Email hoặc Password';
        this.isLoginFailed = true;
      }
    );
  }

}
