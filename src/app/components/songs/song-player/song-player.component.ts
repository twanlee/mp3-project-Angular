import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IReview} from '../../../interfaces/ireview';
import {ActiveService} from '../../../services/interactive/active.service';
import {ToastrService} from 'ngx-toastr';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent implements OnInit {
  songId: number;
  song: ISong;
  postTime: string;
  review: IReview;
  getPostTimeToString(postTime): string{
    // @ts-ignore
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }

  constructor(private songService: SongService,
              private activeRoute: ActivatedRoute,
              private activeService: ActiveService,
              private toastService: ToastrService,
              private route: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.songId = +this.activeRoute.snapshot.paramMap.get("id");
    this.songService.getSongById(this.songId).subscribe(data => {
        this.song = data;
        console.log("call 1 time");
        console.log(this.song);
        this.postTime = this.getPostTimeToString(this.song.postTime);
        // this.review = data.review;
        // console.log(this.review);
    });
    this.activeService.getReviewBySong(this.songId).subscribe(data => {
        this.review = data;
        console.log("this review :");
        console.log(this.review)
    })
  }
  likeSong() {
    console.log("like");
    let userId = +localStorage.getItem("userId");
    if (userId == null || userId == undefined || userId == 0) {
      this.toastService.error("Chuyển hướng sang trang đăng nhập sau 2s", "Bạn chưa đăng nhập")
      setTimeout(()=> {
        this.route.navigateByUrl("/login")
      }, 2000)
    }
    else {
      this.activeService.likeSong(this.songId, userId).subscribe(data => {
        this.review = data;
      });
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
