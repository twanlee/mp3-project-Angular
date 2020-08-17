import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-find-song-for-playlist',
  templateUrl: './find-song-for-playlist.component.html',
  styleUrls: ['./find-song-for-playlist.component.css']
})
export class FindSongForPlaylistComponent implements OnInit {
  @Output() songName: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getSong(event){
    let value = event.target.value;
    this.songName.emit(value);
  }

}
