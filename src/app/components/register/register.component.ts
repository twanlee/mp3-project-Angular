// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../services/register/register.service";
import {User} from "../../interfaces/user/user";
import {Router} from "@angular/router";

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
  isActive: boolean = false;

  constructor(private fb: FormBuilder,
              private register: RegisterService,
              private router: Router
  ) {
  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['example@gmail.com', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['',[Validators.minLength(6)]],
        confirmPassword: ''
      }, {validator: comparePassword})
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      const user: User = {
        email: data.email,
        password: data.pwGroup.password
      };
      this.register.registerUser(user).subscribe(() => {
        this.registerForm.reset("");
        alert('Done!');
      }, error => {
        // alert(error.error.msg);
        this.isActive = true;
      });
    }
  }

}
