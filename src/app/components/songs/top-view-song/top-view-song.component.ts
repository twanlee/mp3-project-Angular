import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../services/songs/song.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {ISong} from '../../../interfaces/isong';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-top-view-song',
  templateUrl: './top-view-song.component.html',
  styleUrls: ['./top-view-song.component.css']
})
export class TopViewSongComponent implements OnInit {
  songList: ISong[];
  constructor(private songService: SongService,
              private activeService: ActiveService,
              private toastService : ToastrService,
              private route: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.songService.getTop10ViewsSong().subscribe( data =>{
      this.songList = data;
    })
  }
  likeSong(songId: number) {
    let userId = +localStorage.getItem("userId");
    console.log("userId :" + userId);
    if (userId == null || userId == undefined || userId == 0) {
      this.toastService.error("Chuyển hướng sang trang đăng nhập sau 2s", "Bạn chưa đăng nhập");
      setTimeout(() => {
        this.route.navigateByUrl("/login")
      }, 2000)
    } else {
      this.activeService.likeSong(songId, userId).subscribe(data => {
        document.getElementById('like' + songId).innerHTML = 'Like (' + data.likes + ')';
      })
    }
  }

  // Thêm bài hát vào danh sách phát
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
      }
    });
    if (!isExisted) {
      trackList.unshift(song);
    }
    this.storageService.setItem('library', JSON.stringify(trackList));
  }

  // Lấy ra tên ca sĩ
  getArtist(song: ISong): string {
    let artistName: string = '';
    song.s_singers.map(singer => {
      artistName += singer.fullName + " ,"
    });
    if (artistName == '') {
      artistName = 'Various Artist '
    }
    return artistName.substring(0, artistName.length-1);
  }
}
