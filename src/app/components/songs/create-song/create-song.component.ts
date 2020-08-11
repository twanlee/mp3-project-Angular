import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../../../services/songs/song.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ISong} from '../../../interfaces/isong';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  createSongForm: FormGroup;
  song: ISong ={

  };
  constructor(private storage: AngularFireStorage,
              private fb: FormBuilder,
              private songService: SongService,
              private router: Router) { }

  ngOnInit(): void {
    this.createSongForm = this.fb.group({
      name: [''],
      lyric: [''],
      authors: [''],
      singers: [''],
      description: ['']
    });
  }
  createSong(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/mp3/featured/'+randomString+new Date().getTime();
    const file: File = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,file).snapshotChanges().pipe(
      finalize( ()=> {
        fileRef.getDownloadURL().subscribe(url => {
              this.song.fileUrl = url;
        })
      })
    )
  }
  createImage(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/images/featured/'+randomString+new Date().getTime();
    const file: File = event.target.files[0];
    const fileRef = this.storage.ref(filePath)
    this.storage.upload(filePath,file).snapshotChanges().pipe(
      finalize( ()=> {
        fileRef.getDownloadURL().subscribe(url => {
          this.song.imageUrl = url;
        })
      })
    )
  }
  submit(){
      let data = this.createSongForm.value;
      this.song.name = data.name;
      this.song.description = data.description;
      this.song.lyric = data.lyric;
      this.songService.createSong(this.song).subscribe(()=>{
        console.log("Add song successful");
      });
      //Điều hướng sau khi post đi đâu tại đây
      // this.router.navigate("")

  }
}
