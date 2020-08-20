import { Component, OnInit } from '@angular/core';
import {ISong} from '../../../interfaces/isong';
import {SongService} from '../../../services/songs/song.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  songs: ISong[] = [];
  songsFilter: ISong[] = [];
  addedSongs: number[] = [];
  playlist: IPlaylist = {};
  constructor(private songService: SongService,
              private playListService: PlaylistService,
              private ac: ActivatedRoute,
              private router: Router) { };
  id: number = + this.ac.snapshot.paramMap.get('id');
  userId: number = +localStorage.getItem('userId');
  ngOnInit(): void {
    this.songService.getAll().subscribe(resp =>{
      this.songs = resp;
    });
    this.songsFilter = this.songs;
    this.playListService.getPlayListById(this.id).subscribe(resp =>{
      this.playlist = resp;
    });
    this.songService.getAll().subscribe(resp =>{
      this.songsFilter = resp;
    });
  }
  filterBySong(songName) {
    return this.songs.filter(
      song => {
        return song.name.toLowerCase().indexOf(songName.toLowerCase()) != -1;
      }
    );
  }
  findSong(event) {
    this.songsFilter = (event) ? this.filterBySong(event) : this.songs;
  }
  submit(){
    this.playListService.updateSongPlaylist(this.addedSongs,this.id).subscribe(()=>{
      console.log("add song ok !!!")
      })
    this.router.navigateByUrl('/user/music')
  }

}
