import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../services/songs/song.service";
import {ISong} from "../../../interfaces/isong";

@Component({
  selector: 'app-song-searching-results',
  templateUrl: './song-searching-results.component.html',
  styleUrls: ['./song-searching-results.component.css']
})
export class SongSearchingResultsComponent implements OnInit {
  songList: ISong[];
  page: number = 1;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
  }

  search(event){
    console.log(event);
    this.songService.getSongByName(event.target.value).subscribe(data=>{
      this.songList = data;
    })
  }

}
