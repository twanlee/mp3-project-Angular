import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song-description',
  templateUrl: './song-description.component.html',
  styleUrls: ['./song-description.component.css']
})
export class SongDescriptionComponent implements OnInit {

  song: ISong;

  constructor(private songService: SongService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get("id");
    this.songService.getSongById(id).subscribe(data => {
      this.song = data;
      console.log(this.song);
    });
  }

}
