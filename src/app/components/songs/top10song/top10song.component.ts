import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {IArtist} from '../../../interfaces/iartist';
import {SongService} from '../../../services/songs/song.service';
import {ActiveService} from '../../../services/interactive/active.service';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-top10song',
  templateUrl: './top10song.component.html',
  styleUrls: ['./top10song.component.css']
})
export class Top10songComponent implements OnInit {


  songs: ISong[] = [];
  constructor(private songService: SongService,
              private activeService: ActiveService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.songService.getTop10Song().subscribe(data => {
      this.songs = data;
    })
  }
  getPostTimeToString(postTime): string{
    // @ts-ignore
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }
  likeSong(songId: number) {
      let userId = +localStorage.getItem("userId");
      this.activeService.likeSong(songId, userId).subscribe(data => {
          document.getElementById('like'+songId).innerHTML = 'Like ('+data.likes+')';
      })
  }

  // Thêm bài hát vào danh sách phát
  addToTrack(data: ISong) {
    let isExisted: boolean = false;
    let song: any = {
      name: data.name,
      artist: this.getArtist(data),
      url: data.fileUrl,
      cover: data.imageUrl
    };
    let trackList: any[] = JSON.parse(sessionStorage.getItem('library'));
    if (trackList == null) {
      trackList = [];
    };
    trackList.map(next => {
      if (next.name == song.name && next.artist == song.artist && next.url == song.url) {
        isExisted = true;
      }
    });
    if (!isExisted) {
      trackList.unshift(song);
    }
    this.storageService.setItem('library', JSON.stringify(trackList));
  }

  // Lấy ra tên ca sĩ
  getArtist(song: ISong): string {
      let artistName: string = '';
      song.s_singers.map(singer => {
          artistName += singer.fullName + " ,"
      });
      if (artistName == '') {
        artistName = 'Various Artist '
      }
      return artistName.substring(0, artistName.length-1);
  }


}
