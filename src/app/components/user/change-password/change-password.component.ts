import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../services/token-storage.service';


function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.re_password) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  cpForm: FormGroup;
  password: string;
  re_password: string;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }
  id: number = +localStorage.getItem('userId');
  ngOnInit(): void {
    this.cpForm = this.fb.group({
      password: ['',[Validators.minLength(6)]],
      re_password: ['',[Validators.minLength(6)]],
    },{validator: comparePassword})
  }
  submit(){
      let data = this.cpForm.value;
      if( data.password === data.re_password){
        this.userService.changePassword(this.id,data.password).subscribe(()=>{
          alert("Thay đổi mật khẩu thành công")
        });
        this.tokenStorage.signOut();
        this.router.navigateByUrl('login');
      } else {
        alert("Thay đổi mật khẩu không thành công !!!")
      }

  }

}
