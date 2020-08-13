import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ActivatedRoute} from '@angular/router';
import {ISong} from '../../../interfaces/isong';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: IPlaylist;
  songs: ISong[] = [];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [5,10];
  msaapPlaylist: Track[] = [
    {
      title: '',
      link: ''
    }
  ];
  constructor(private playlistService: PlaylistService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getPlayListById(id).subscribe(data => {
        this.playlist = data;
    });
    this.playlistService.getSongFromPlaylist(id).subscribe(data => {
        this.songs = data;
        this.songs.map(data => {
          this.convertSongToTrack(data);
        });
        console.log(this.msaapPlaylist);
    });
  }
  convertSongToTrack(song){
      let track: Track = {
        title: song.name,
        link : song.fileUrl,
      };
      this.msaapPlaylist.push(track);
  }
}
