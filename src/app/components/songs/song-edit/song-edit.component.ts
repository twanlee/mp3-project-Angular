import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../services/songs/song.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ISong} from '../../../interfaces/isong';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {IArtist} from '../../../interfaces/iartist';
import {ArtistService} from '../../../services/artist/artist.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  editSongForm: FormGroup;
  song: ISong;
  fileSong: File;
  fileImage: File;
  songUrl: string = '';
  imageUrl: string = '';
  user_id: number;
  artists: IArtist[] = [];
  artistsFilter = [];
  singers: number[] = [];
  authors: number[] = [];

  constructor(private songService: SongService,
              private fb: FormBuilder,
              private rt: Router,
              private ac: ActivatedRoute,
              private storage: AngularFireStorage,
              private artistService: ArtistService
              ) { }
  id: number = +this.ac.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.songService.getSongById(this.id).subscribe( resp => {
      this.song = resp;
      this.editSongForm = this.fb.group({
        category: [''],
        name: [this.song.name],
        lyric: [this.song.lyric],
        description: [this.song.description]
      });
      this.songUrl = this.song.fileUrl;
      this.imageUrl = this.song.imageUrl;
    });
    this.artistService.getAll().subscribe(resp =>{
      this.artists = resp;
    });
    this.artistService.getAll().subscribe(resp =>{
      this.artistsFilter = resp;
    })
  }

  submit(){
   let data = this.editSongForm.value;
   this.song.name = data.name;
   this.song.lyric = data.lyric;
   this.song.description = data.description;
   if(this.singers.length > 0){
     for (let i = 0; i < this.singers.length; i++) {
       this.song.s_singers[i] = {};
       this.song.s_singers[i].id = this.singers[i];
     }
   }
   if( this.authors.length > 0){
     for (let i = 0; i < this.authors.length; i++) {
       this.song.s_authors[i] = {};
       this.song.s_authors[i].id = this.authors[i];
     }
   }
   this.songService.saveSong(this.song).subscribe(()=>{
     console.log("edit ok")
   })
  }
  updateSong(event){
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'mp3/featured/' +randomString+new Date().getTime();
    this.fileSong = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,this.fileSong).snapshotChanges().pipe(
      finalize(() =>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.songUrl = url;
          console.log(url);
        })
      })
    ).subscribe();
  }
  updateImage(event){const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' +randomString+new Date().getTime();
    this.fileImage = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath,this.fileImage).snapshotChanges().pipe(
      finalize(() =>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.imageUrl = url;
          console.log(url);
        })
      })
    ).subscribe();
  }
  filterByArtist(artistName) {
    return this.artists.filter(
      artist => {
        return artist.fullName.indexOf(artistName) != -1;
      }
    );
  }
  findArtist(event) {
    this.artistsFilter = (event) ? this.filterByArtist(event) : this.artists;
  }
}
