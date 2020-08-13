// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../services/register/register.service";
import {Router} from "@angular/router";
// @ts-ignore
import {IUser} from '../../interfaces/user/user';
import {TokenStorageService} from '../../services/token-storage.service';


function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSuccessful = false;
  constructor(private fb: FormBuilder,
              private register: RegisterService,
              private router: Router,
              private tokenStorage: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      pwGroup: this.fb.group({
        password: ['',[Validators.minLength(6)]],
        confirmPassword: ''
      }, {validator: comparePassword})
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      const user: IUser = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.pwGroup.password
      };
      // console.log(user)
      this.register.registerUser(user).subscribe(() => {
        this.registerForm.reset("");
        // this.isSuccessful = true;
        this.tokenStorage.saveRegistered(this.isSuccessful = true);
        this.router.navigate(['/login']);
      }, error => {
        this.isSuccessful = false;
        alert('Email đã tồn tại');
      });
    }
  }

}
