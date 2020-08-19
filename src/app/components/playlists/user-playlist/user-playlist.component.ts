import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {ActiveService} from '../../../services/interactive/active.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.css']
})
export class UserPlaylistComponent implements OnInit {
  userId:number;
  playlists: IPlaylist[] = [];

  constructor(
    private playlistService: PlaylistService,
    private activeService: ActiveService,
    private toastService: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userId = +localStorage.getItem('userId');
    this.getPlaylistByUser(this.userId);
    console.log(this.playlists)
  }
  getPlaylistByUser(id: number){
    this.playlistService.getPlaylistByUser(id).subscribe(data => {
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
