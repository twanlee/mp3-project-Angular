import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }
  createSong(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/mp3/featured/';
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref( filePath+randomString+new Date().getTime());
    storageRef.put(file,metaData);

  }
  createImage(event: any){
    let randomString = Math.random().toString(36).substring(7);
    let filePath: string = '/images/featured/'
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref(filePath+randomString+new Date().getTime());
    storageRef.put(file,metaData);
  }
}
