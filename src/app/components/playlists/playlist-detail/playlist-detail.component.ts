import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ActivatedRoute} from '@angular/router';
import {ISong} from '../../../interfaces/isong';
import {Track} from 'ngx-audio-player';
import {ActiveService} from '../../../services/interactive/active.service';
import {StorageService} from '../../../services/storage.service';

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
  msaapPageSizeOptions = [5, 10];
  msaapPlaylist: Track[] = [
    {
      title: '',
      link: ''
    }
  ];

  constructor(private playlistService: PlaylistService,
              private activeRoute: ActivatedRoute,
              private activeService: ActiveService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getPlayListById(id).subscribe(data => {
      this.playlist = data;
    });
    this.playlistService.getSongFromPlaylist(id).subscribe(data => {
      this.songs = data;
      // this.songs.map(data => {
      //   this.convertSongToTrack(data);
      // });
      console.log('songs is :');
      console.log(this.songs);
    });
  }

  convertSongToTrack(song) {
    let track: Track = {
      title: song.name,
      link: song.fileUrl,
    };
    this.msaapPlaylist.push(track);
  }

  getPostTimeToString(postTime): string {
    // @ts-ignore
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }

  onEnded(event) {
    console.log(event.value);
  }

  likeSong(songId: number) {
    console.log('song id là : ' + songId);
    let userId = +localStorage.getItem('userId');
    this.activeService.likeSong(songId, userId).subscribe(data => {
      document.getElementById('like' + songId).innerHTML = 'Like (' + data.likes + ')';
    });
  }

  likePlaylist() {
    let userId = +localStorage.getItem('userId');
    this.activeService.likePlaylist(this.playlist.id, userId).subscribe(data => {
      document.getElementById('playlistLike').innerHTML = 'Like (' + data.likes + ')';

    });
  }

  addToTrack(data: ISong) {
    let isExisted: boolean = false;
    let song: any = {
      name: data.name,
      artist: this.getArtist(data),
      url: data.fileUrl,
      cover: data.imageUrl
    };
    let trackList: any[] = JSON.parse(sessionStorage.getItem('library'));
    if (trackList == null) {
      trackList = [];
    };
    trackList.map(next => {
      if (next.name == song.name && next.artist == song.artist && next.url == song.url) {
        isExisted = true;
        console.log(isExisted)
      }
    });
    if (!isExisted) {
      trackList.unshift(song);
    }
    this.storageService.setItem('library', JSON.stringify(trackList));
  }

  getArtist(song: ISong): string {
    let artistName: string = '';
    song.s_singers.map(singer => {
      artistName += singer.fullName + " ,"
    });
    if (artistName == '') {
      artistName = 'Various Artist'
    }
    console.log('artist : '+ artistName);
    return artistName;
  }
}
