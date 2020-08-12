import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent implements OnInit {
  song: ISong;
  postTime: string;
  getPostTimeToString(postTime): string{
    // @ts-ignore
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }

  constructor(private songService: SongService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get("id");
    this.songService.getSongById(id).subscribe(data => {
        this.song = data;
        console.log(this.song)
      this.postTime = this.getPostTimeToString(this.song.postTime);
    });
  }

}
