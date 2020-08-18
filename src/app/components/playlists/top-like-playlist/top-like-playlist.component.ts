import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {IPlaylist} from '../../../interfaces/iplaylist';

@Component({
  selector: 'app-top-like-playlist',
  templateUrl: './top-like-playlist.component.html',
  styleUrls: ['./top-like-playlist.component.css']
})
export class TopLikePlaylistComponent implements OnInit {
  playlists: IPlaylist[];

  constructor(private playlistService: PlaylistService, private activeService: ActiveService) { }

  ngOnInit(): void {
    this.playlistService.getTop10PlaylistByLikes().subscribe(data => {
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
