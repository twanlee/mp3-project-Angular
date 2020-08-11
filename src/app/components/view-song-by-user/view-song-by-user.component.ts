import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ISong} from "../../interfaces/songs/song";
import {IUser} from "../../interfaces/user/user";
import {IUserToken} from "../../interfaces/user/user-token";

@Component({
  selector: 'app-view-song-by-user',
  templateUrl: './view-song-by-user.component.html',
  styleUrls: ['./view-song-by-user.component.css']
})
export class ViewSongByUserComponent implements OnInit {
  userId:number;
  page: number = 1;


  songList: ISong[];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userId = +localStorage.getItem("userId");
    this.getAllSongByUser(this.userId);
  }

  getAllSongByUser(id) {
    this.userService.getAllSongByUser(id).subscribe((data) => {
      this.songList = data;
    })
  }
  delete(id: number){
    // if (confirm('Bạn chắc chưa?')) {
    //   this.x.deleteBookById(id).subscribe(() => {
    //     this.getAllSongByUser(this.id);
    //   });
    // }
  }

}
