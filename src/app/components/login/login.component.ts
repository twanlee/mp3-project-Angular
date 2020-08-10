import { Component, OnInit } from '@angular/core';
import {Role} from '../../interfaces/role/role';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../interfaces/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
  });
  isLoggined = false;
  isLoginFailed = false;
  errorMessage = "";
  role: Role;
  constructor(private authenticationService: AuthenticationService) {

  }
  get email(){
      return this.userForm.get("email")
  }
  get password(){
      return this.userForm.get("password")
  }


  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.isLoggined == true;
      this.role = {
        authority : localStorage.getItem("role")
      }
    }
  }

  submit(){
    // @ts-ignore
    let user: User = {
      email : this.userForm.value.email,
      password: this.userForm.value.password
    };

    this.authenticationService.login(user).subscribe(next => {
          console.log(next);
          this.isLoginFailed = false;
          this.isLoggined = true;
          localStorage.setItem("token", next.accessToken);
          // @ts-ignore
          localStorage.setItem("role", next.role(0));
          localStorage.setItem("email", next.email);
          window.location.reload();
    }, err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
    })

  }

}
