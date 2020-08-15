import {Component, OnInit} from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {UserService} from '../../../services/user/user.service';
import {getPostTimeToString} from '../../../app.module';


@Component({
  selector: 'app-view-song-by-user',
  templateUrl: './view-song-by-user.component.html',
  styleUrls: ['./view-song-by-user.component.css']
})
export class ViewSongByUserComponent implements OnInit {
  userId: number;
  page: number = 1;


  songList: ISong[];

  constructor(
    private songService: SongService
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

  delete(id: number) {
    if (confirm('Bạn chắc chưa?')) {
      this.songService.deleteSongById(id).subscribe(() => {
        this.getAllSongByUser(this.userId);
      });
    }
  }

  convertTime(postTime: Date) {
    getPostTimeToString(postTime);
  }
}
