import { Component, OnInit } from '@angular/core';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-playlist',
  templateUrl: './all-playlist.component.html',
  styleUrls: ['./all-playlist.component.css']
})
export class AllPlaylistComponent implements OnInit {
  playlists: IPlaylist[] = [];
  constructor(private playlistService: PlaylistService,
              private activeService: ActiveService,
              private toastService: ToastrService,
              private route: Router) { }

  ngOnInit(): void {
      this.playlistService.getPlayList().subscribe(data => {
          this.playlists = data;
          console.log(data);
          console.log(this.playlists);
      });
      this.rollToTop();
  }
  rollToTop(){
    // This prevents the page from scrolling down to where it was previously.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0,0);
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
