import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-songs-and-playlist',
  templateUrl: './user-songs-and-playlist.component.html',
  styleUrls: ['./user-songs-and-playlist.component.css']
})
export class UserSongsAndPlaylistComponent implements OnInit {
  isShowSongs: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.isShowSongs = !this.isShowSongs
  }
}
