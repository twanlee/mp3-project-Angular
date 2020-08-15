import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../services/songs/song.service";
import {ISong} from "../../../interfaces/isong";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {getPostTimeToString} from "../../../app.module";
import {ActiveService} from '../../../services/interactive/active.service';

@Component({
  selector: 'app-song-searching-results',
  templateUrl: './song-searching-results.component.html',
  styleUrls: ['./song-searching-results.component.css']
})
export class SongSearchingResultsComponent implements OnInit {
  songList: ISong[];
  page: number = 1;
  keyword: string;
  topSixSongs: ISong[];

  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private activeService: ActiveService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.keyword = data.keyword;
      this.search(this.keyword);
    });
    this.getTopSix();
  }

  getTopSix(){
    this.songService.getTop10Song().subscribe(data => {
      this.topSixSongs = data;
    })
  }

  search(keyword){
    this.songService.getSongByName(keyword).subscribe(data=>{
      this.songList = data;
    })
  }

  convertTime(postTime): string{
    return getPostTimeToString(postTime);
  }
  likeSong(songId: number) {
    let userId = +localStorage.getItem("userId");
    this.activeService.likeSong(songId, userId).subscribe(data => {
      document.getElementById('like'+songId).innerHTML = 'Like ('+data.likes+')';
    })
  }
}
