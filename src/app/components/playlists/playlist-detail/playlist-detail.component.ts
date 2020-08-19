import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ISong} from '../../../interfaces/isong';
import {Track} from 'ngx-audio-player';
import {ActiveService} from '../../../services/interactive/active.service';
import {StorageService} from '../../../services/storage.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  navigationSubscription;
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
              private storageService: StorageService,
              private toastService: ToastrService,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.refetchData();
      }
    });
  }
  refetchData() {
    let id = +this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getPlayListById(id).subscribe(data => {
      this.playlist = data;
    });
    this.playlistService.getSongFromPlaylist(id).subscribe(data => {
      this.songs =data;
    })
  }
  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getPlayListById(id).subscribe(data => {
      this.playlist = data;
    });
    this.playlistService.getSongFromPlaylist(id).subscribe(data => {
        this.songs = data;
    })
  }

  convertSongToTrack(song) {
    let track: Track = {
      title: song.name,
      link: song.fileUrl,
    };
    this.msaapPlaylist.push(track);
  }

  getPostTimeToString(postTime): string {
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }

  onEnded(event) {
    console.log(event.value);
  }

  likeSong(songId: number) {
    let userId = +localStorage.getItem("userId");
    console.log("userId :" + userId);
    if (userId == null || userId == undefined || userId == 0) {
      this.toastService.error("Chuyển hướng sang trang đăng nhập sau 2s", "Bạn chưa đăng nhập")
      setTimeout(()=> {
        this.router.navigateByUrl("/login")
      }, 2000)
    }
    else {
      this.activeService.likeSong(songId, userId).subscribe(data => {
        document.getElementById('like'+songId).innerHTML = 'Like ('+data.likes+')';
      })
    }
  }

  likePlaylist() {
    let userId = +localStorage.getItem("userId");
    console.log("userId :" + userId);
    if (userId == null || userId == undefined || userId == 0) {
      this.toastService.error("Chuyển hướng sang trang đăng nhập sau 2s", "Bạn chưa đăng nhập");
      setTimeout(()=> {
        this.router.navigateByUrl("/login")
      }, 2000)
    }
    else {
      this.activeService.likePlaylist(this.playlist.id, userId).subscribe(data => {
        document.getElementById('like'+this.playlist.id).innerHTML = 'Like ('+data.likes+')';
      })
    }
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
      artistName = 'Various Artist '
    }
    console.log('artist : '+ artistName);
    return artistName.substring(0, artistName.length - 1);
  }

  removeSong(id: number, id2: number) {
    this.playlistService.getPlayListById(id).subscribe(data => {
      let playlist: IPlaylist = data;
      let userId = localStorage.getItem('userId');
      if(+playlist.userCreate.id != +userId){
        this.router.navigate(['/']);
      }
    });

    if (confirm('Bạn chắc chưa?')) {
      this.playlistService.deleteSongPlaylist(id, id2).subscribe(() => {
        this.router.navigate(['/playlist', this.playlist.id, 'detail'])
      });
    }
  }
}
