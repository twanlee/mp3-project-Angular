import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';

@Component({
  selector: 'app-greatest-song',
  templateUrl: './greatest-song.component.html',
  styleUrls: ['./greatest-song.component.css']
})
export class GreatestSongComponent implements OnInit {
  song: ISong = {
    name: "em không sai chúng ta sai",
    fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
    singers: [{
      fullName: "erik"
    }],
    userCreate: "danpq14",
    postTime: new Date()
  };
  postTime: string;
  songDuration: string;
  getPostTimeToString(): string{
    // @ts-ignore
    let string = this.song.postTime.toDateString();
    string = string.slice(4);
    console.log(string);
    return string;
  }
  getSongDuration(): string {


    // @ts-ignore
    let duration = this.song.fileUrl.duration;
    console.log(duration);
    let minute = Math.floor(duration/60);
    let seconds = duration - minute*60;
    let time = minute+ ":" + seconds;
    return time;
  };
  constructor() { }

  ngOnInit(): void {
    this.postTime = this.getPostTimeToString();
    this.songDuration = this.getSongDuration();

  }


}
