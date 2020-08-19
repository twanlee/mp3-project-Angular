import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-trending',
  templateUrl: './top-trending.component.html',
  styleUrls: ['./top-trending.component.css']
})
export class TopTrendingComponent implements OnInit {
    status = 1;
    songActive = true;
  constructor() { }

  ngOnInit(): void {
  }
  showTopViewSongs(){
    this.status = 1;
    this.songActive = true;
  }
  showTopLikeSongs(){
    this.status = 2;
    this.songActive = false;
  }
  showTopViewPlaylists(){
    this.songActive = false;
    this.status = 3;
  }
  showTopLikePlaylists(){
    this.songActive = false;
    this.status = 4;
  }
}
