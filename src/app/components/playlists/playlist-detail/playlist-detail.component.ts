import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ActivatedRoute} from '@angular/router';
import {ISong} from '../../../interfaces/isong';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: IPlaylist;
  songs: ISong[] = [];
  constructor(private playlistService: PlaylistService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getPlayListById(id).subscribe(data => {
        this.playlist = data;
        console.log(this.playlist)
    });
    this.playlistService.getSongFromPlaylist(id).subscribe(data => {
      this.songs = data;
      console.log(this.songs)
    })

  }

}
