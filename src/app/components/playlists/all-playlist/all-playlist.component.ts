import { Component, OnInit } from '@angular/core';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {PlaylistService} from '../../../services/playlist/playlist.service';

@Component({
  selector: 'app-all-playlist',
  templateUrl: './all-playlist.component.html',
  styleUrls: ['./all-playlist.component.css']
})
export class AllPlaylistComponent implements OnInit {
  playlists: IPlaylist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
      this.playlistService.getPlayList().subscribe(data => {
          this.playlists = data;
          console.log(this.playlists);
      });
      this.rollToTop();
  }
  rollToTop(){
    // This prevents the page from scrolling down to where it was previously.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0,0);
  }
}
