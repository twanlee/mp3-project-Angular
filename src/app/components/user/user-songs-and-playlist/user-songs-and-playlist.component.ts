import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-songs-and-playlist',
  templateUrl: './user-songs-and-playlist.component.html',
  styleUrls: ['./user-songs-and-playlist.component.css']
})
export class UserSongsAndPlaylistComponent implements OnInit {
  status: number = 1;
  songActive: boolean= true;
  playlistActive: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  showSong(){
    this.songActive = true;
    this.playlistActive = false;
    this.status = 1;
  }
  showPlaylist(){
    this.songActive = false;
    this.playlistActive = true;
    this.status = 2;
  }
}
