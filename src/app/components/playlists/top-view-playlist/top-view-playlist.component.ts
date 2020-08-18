import { Component, OnInit } from '@angular/core';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {ActiveService} from '../../../services/interactive/active.service';

@Component({
  selector: 'app-top-view-playlist',
  templateUrl: './top-view-playlist.component.html',
  styleUrls: ['./top-view-playlist.component.css']
})
export class TopViewPlaylistComponent implements OnInit {

  playlists: IPlaylist[];

  constructor(private playlistService: PlaylistService, private activeService: ActiveService) { }

  ngOnInit(): void {
    this.playlistService.getTop10PlaylistByViews().subscribe(data => {
      this.playlists = data;
    })
  }

  likePlaylist(playlistId: number) {
    let userId = +localStorage.getItem("userId");
    this.activeService.likePlaylist(playlistId, userId).subscribe(data => {
      document.getElementById('like'+playlistId).innerHTML = 'Like ('+data.likes+')';
    })
  }
}
