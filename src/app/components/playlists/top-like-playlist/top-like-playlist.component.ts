import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-like-playlist',
  templateUrl: './top-like-playlist.component.html',
  styleUrls: ['./top-like-playlist.component.css']
})
export class TopLikePlaylistComponent implements OnInit {
  playlists: IPlaylist[];

  constructor(private playlistService: PlaylistService,
              private activeService: ActiveService,
              private toastService: ToastrService,
              private route: Router) { }

  ngOnInit(): void {
    this.playlistService.getTop10PlaylistByLikes().subscribe(data => {
      this.playlists = data;
    })
  }

  likePlaylist(playlistId: number) {
    let userId = +localStorage.getItem("userId");
    console.log("userId :" + userId);
    if (userId == null || userId == undefined || userId == 0) {
      this.toastService.error("Chuyển hướng sang trang đăng nhập sau 2s", "Bạn chưa đăng nhập")
      setTimeout(()=> {
        this.route.navigateByUrl("/login")
      }, 2000)
    }
    else {
      this.activeService.likePlaylist(playlistId, userId).subscribe(data => {
        document.getElementById('like'+playlistId).innerHTML = 'Like ('+data.likes+')';
      })
    }
  }
}
