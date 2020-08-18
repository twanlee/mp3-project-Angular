import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-trending',
  templateUrl: './top-trending.component.html',
  styleUrls: ['./top-trending.component.css']
})
export class TopTrendingComponent implements OnInit {
    status = 1;
  constructor() { }

  ngOnInit(): void {
  }
  showTopViewSongs(){
    this.status = 1;
  }
  showTopLikeSongs(){
    this.status = 2;
  }
  showTopViewPlaylists(){
    this.status = 3;
  }
  showTopLikePlaylists(){
    this.status = 4;
  }
}
