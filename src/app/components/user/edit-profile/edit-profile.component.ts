import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProfile} from '../../../interfaces/user/profile';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {IUser} from '../../../interfaces/user/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  profile: IProfile;
  user: IUser;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {

  }

  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      id = Number(paraMap.get('id'));
    });
    this.editProfileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      gender: ['', [Validators.required]]
    });
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
    });
    this.userService.getProfileByUserId(id).subscribe(resp => {
      this.profile = resp;
      this.editProfileForm.patchValue(resp);
    });
  }


  onSubmit() {
    if (this.editProfileForm.valid) {
      let newProfile = this.editProfileForm.value;
      this.userService.editProfileByUserId(this.user.id, newProfile).subscribe(
        data => {
          this.editProfileForm.reset('');
        },
        error =>{
          alert(error);
        }
      );
      this.router.navigate(['/user/' + this.user.id + '/profile']);
    }

  }
}
