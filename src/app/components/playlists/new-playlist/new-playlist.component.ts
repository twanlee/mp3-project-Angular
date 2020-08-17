import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {SongService} from '../../../services/songs/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  createPlaylistForm: FormGroup;
  playList: IPlaylist = {};
  id = +localStorage.getItem('userId');
  fileImage: File;
  constructor(private playlistService: PlaylistService,
              private fb: FormBuilder,
              private songService: SongService,
              private storage: AngularFireStorage
              ) { }

  ngOnInit(): void {
    this.createPlaylistForm = this.fb.group({
        title: ['']

    });
  }
  submit(){
    let data = this.createPlaylistForm.value;
    this.playList.title = data.title;
    this.playlistService.createPlaylist(this.playList,this.id).subscribe(()=>{
      console.log("New playlist OK !!!");
    })

  }
  uploadImage(event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' + randomString + new Date().getTime();
    this.fileImage = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.fileImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.playList.imgUrl = url;
          console.log(url);
        });
      })
    ).subscribe();
  }
}
