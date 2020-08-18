import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../services/songs/song.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {ISong} from '../../../interfaces/isong';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-like-song',
  templateUrl: './top-like-song.component.html',
  styleUrls: ['./top-like-song.component.css']
})
export class TopLikeSongComponent implements OnInit {
  songList: ISong[];
  constructor(private songService: SongService,
              private activeService: ActiveService,
              private toastService: ToastrService,
              private route: Router) { }

  ngOnInit(): void {
    this.songService.getTop10LikesSong().subscribe( data =>{
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

}
