import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  createSongForm: FormGroup;
  song: ISong;
  constructor(private db: AngularFireDatabase,
              private fb: FormBuilder,
              private songService: SongService,
              private router: Router) { }

  ngOnInit(): void {
    this.createSongForm = this.fb.group({
      'name': [''],
      'lyric': [''],
      'authors': [''],
      'singers': [''],
      'description': ['']
    })
  }
  createSong(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/mp3/featured/';
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref( filePath+randomString+new Date().getTime());
    storageRef.put(file,metaData);
    //Thêm trường fileUrl của bài hát tại đây
    // this.song.fileUrl = ?
  }
  createImage(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/images/featured/'
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref(filePath+randomString+new Date().getTime());
    storageRef.put(file,metaData);
    //Thêm trường imageUrl của bài hát tại đây
    //this.song.imageUrL = ?
  }
  submit(){
      let data = this.createSongForm.value;
      this.song.name = data.name;
      this.song.authors = data.authors;
      this.song.singers = data.singers;
      this.song.description = data.description;
      this.song.lyric = data.lyric;
      this.songService.createSong(this.song).subscribe(()=>{
        console.log("Add song successful");
      });
      //Điều hướng sau khi post đi đâu tại đây
      // this.router.navigate("")

  }
}
