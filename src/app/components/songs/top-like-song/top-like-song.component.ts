import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../services/songs/song.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {ISong} from '../../../interfaces/isong';

@Component({
  selector: 'app-top-like-song',
  templateUrl: './top-like-song.component.html',
  styleUrls: ['./top-like-song.component.css']
})
export class TopLikeSongComponent implements OnInit {
  songList: ISong[];
  constructor(private songService: SongService,
              private activeService: ActiveService) { }

  ngOnInit(): void {
    this.songService.getTop10LikesSong().subscribe( data =>{
      this.songList = data;
    })
  }

  likeSong(songId: number) {
    let userId = +localStorage.getItem("userId");
    this.activeService.likeSong(songId, userId).subscribe(data => {
      document.getElementById('like'+songId).innerHTML = 'Like ('+data.likes+')';
    })
  }

}
