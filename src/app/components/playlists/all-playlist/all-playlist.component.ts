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
      })
  }

}
