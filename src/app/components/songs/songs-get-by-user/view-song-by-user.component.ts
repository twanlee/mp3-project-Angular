import {Component, OnInit} from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {UserService} from '../../../services/user/user.service';
import {getPostTimeToString} from '../../../app.module';
import {ActiveService} from '../../../services/interactive/active.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-song-by-user',
  templateUrl: './view-song-by-user.component.html',
  styleUrls: ['./view-song-by-user.component.css']
})
export class ViewSongByUserComponent implements OnInit {
  userId: number;
  songList: ISong[];

  constructor(
    private songService: SongService,
    private activeService: ActiveService,
    private toastService: ToastrService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.userId = +localStorage.getItem('userId');
    this.getAllSongByUser(this.userId);
  }

  getAllSongByUser(id) {
    this.songService.getAllSongByUser(id).subscribe((data) => {
      this.songList = data;
    });
  }


  convertTime(postTime: Date) {
    getPostTimeToString(postTime);
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
