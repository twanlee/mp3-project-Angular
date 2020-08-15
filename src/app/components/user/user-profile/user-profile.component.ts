import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {IProfile} from '../../../interfaces/user/profile';
import {IUser} from '../../../interfaces/user/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: IUser;
  profile: IProfile;
  userId: number;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
    });
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
    this.userService.getProfileByUserId(this.userId).subscribe(resp => {
      this.profile = resp;
    })
  }

}
