import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../../../services/songs/song.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ISong} from '../../../interfaces/isong';
import {UserService} from '../../../services/user/user.service';


@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  createSongForm: FormGroup;
  fileSong: File;
  fileImage: File;
  song: ISong = {};
  id_user: number;
  constructor(private storage: AngularFireStorage,
              private fb: FormBuilder,
              private songService: SongService,
              private router: Router,
              private userService: UserService){}


  ngOnInit(): void {
    this.id_user = +localStorage.getItem('userId');
    this.createSongForm = this.fb.group({
      name: [''],
      lyric: [''],
      authors: [''],
      singers: [''],
      description: ['']
    });
  }

  createSong(event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'mp3/featured/' +randomString+new Date().getTime();
    this.fileSong = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,this.fileSong).snapshotChanges().pipe(
      finalize(() =>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.song.fileUrl = url;
          console.log(url);
        })
      })
    ).subscribe();
  }
  createImage(event) {
      const randomString = Math.random().toString(36).substring(7);
      const filePath = 'image/featured/' +randomString+new Date().getTime();
      this.fileImage = event.target.files[0];
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.fileImage).snapshotChanges().pipe(
        finalize(() =>{
          fileRef.getDownloadURL().subscribe(url =>{
            this.song.imageUrl = url;
            console.log(url);
          })
        })
      ).subscribe();
  }

  submit() {
    let data = this.createSongForm.value;
    this.song.name = data.name;
    this.song.description = data.description;
    this.song.lyric = data.lyric;
    this.song.postTime = new Date();
    this.songService.saveSong(this.song).subscribe(() => {
      console.log('Add song successful');
    });
    //Điều hướng sau khi post đi đâu tại đây
    // this.router.navigate("")

  }
}
