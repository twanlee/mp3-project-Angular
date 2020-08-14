import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {IArtist} from '../../../interfaces/iartist';
import {SongService} from '../../../services/songs/song.service';

@Component({
  selector: 'app-top10song',
  templateUrl: './top10song.component.html',
  styleUrls: ['./top10song.component.css']
})
export class Top10songComponent implements OnInit {

  // songs: ISong[] = [
  //   {
  //     name: "em không sai chúng ta sai",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "erik"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Gác lại âu lo",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Da Lab"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Ngày mai em đi",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Lê Hiếu"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "How you like that",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Black Pink"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Em",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Dân"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Bài hát số 6",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Various Artist"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Thanh Xuân",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Da Lab"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Nước mắt em lau bằng tình yêu mới",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Da Lab"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Thích thì đến",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Lê Bảo Bình"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   },
  //   {
  //     name: "Buồn của anh",
  //     fileUrl: "https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/mp3%2Ffeatured%2F5x1d6s1597142101591?alt=media&token=30ffde17-3abc-4f4e-80be-c0b93edbb455",
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU",
  //     singers: [{
  //       fullName: "Đạt G"
  //     }],
  //     userCreate: "danpq14",
  //     postTime: new Date()
  //   }
  // ];

  songs: ISong[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getTop10Song().subscribe(data => {
      console.log("data :");
      console.log(data);
      this.songs = data;
      console.log("songs :");
      console.log(this.songs)
    })
  }
  getPostTimeToString(postTime): string{
    // @ts-ignore
    let date = new Date(postTime);
    let string = date.toDateString();
    string = string.slice(4);
    return string;
  }
  // getSinger(singers: IArtist[]): string {
  //     let s: any = singers.map(next => {
  //       s += next.fullName + " ,"
  //     });
  //     console.log("singer is : " + s);
  //     return s
  // }
}
