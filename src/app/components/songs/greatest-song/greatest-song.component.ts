import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {ActiveService} from '../../../services/interactive/active.service';

@Component({
  selector: 'app-greatest-song',
  templateUrl: './greatest-song.component.html',
  styleUrls: ['./greatest-song.component.css']
})
export class GreatestSongComponent implements OnInit {
  song: ISong;
  constructor(private songService: SongService,
              private activeService: ActiveService) { }

  ngOnInit(): void {
    this.songService.getTheBestSong().subscribe(data => {
      this.song = data;
    })
  }
  likeSong(songId: number) {
    let userId = +localStorage.getItem("userId");
    this.activeService.likeSong(songId, userId).subscribe(data => {
      document.getElementById('like'+songId).innerHTML = 'Like ('+data.likes+')';
    })
  }

}
