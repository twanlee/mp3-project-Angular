import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProfile} from '../../../interfaces/user/profile';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {IUser} from '../../../interfaces/user/user';
import {IGender} from '../../../interfaces/user/gender';
import {GenderService} from '../../../services/user/gender.service';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  profile: IProfile;
  user: IUser;
  firstName: string;
  lastName: string;
  fileImage: File;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private genderService: GenderService,
              private storage: AngularFireStorage) {
  }
  groupGender: IGender[] = this.genderService.getGenderList();
  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      id = Number(paraMap.get('id'));
    });
    this.editProfileForm = this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
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
        const profile: IProfile = {
          id: newProfile.id,
          firstName: newProfile.firstName,
          lastName: newProfile.lastName,
          birthday: newProfile.birthday,
          phoneNumber: newProfile.phoneNumber,
          gender: newProfile.gender
        };
        this.userService.editProfileByUserId(this.user.id, newProfile).subscribe (
          data => {
            this.editProfileForm.reset('');
          },
        );
        this.router.navigate(['/user/' + this.user.id + '/profile']);
      } else {
        alert('Vui lòng nhập lại')
      }
    }
  editImage (event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' +randomString + new Date().getTime();
    this.fileImage = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,this.fileImage).snapshotChanges().pipe(
      finalize(() =>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.editProfileForm.value.avatarUrl = url;
          console.log(url);
        })
      })
    ).subscribe();
  }
}
