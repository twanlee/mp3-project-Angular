import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../../../services/songs/song.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ISong} from '../../../interfaces/isong';
import {UserService} from '../../../services/user/user.service';
import {ArtistService} from '../../../services/artist/artist.service';
import {IArtist} from '../../../interfaces/iartist';
import {ToastrService} from 'ngx-toastr';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  public Editor = ClassicEditor;
  ckconfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
  };
  createSongForm: FormGroup;
  fileSong: File;
  fileImage: File;
  song: ISong = {};
  id_user: number;
  singers: IArtist[] = [];
  authors: IArtist[] = [];
  singersFilter: IArtist[] = [];
  authorsFilter: IArtist[] = [];
  singersSelected: number[] = [];
  authorsSelected: number[] = [];
  constructor(private storage: AngularFireStorage,
              private fb: FormBuilder,
              private songService: SongService,
              private router: Router,
              private userService: UserService,
              private artistService: ArtistService,
              private toastService: ToastrService) {
  }


  ngOnInit(): void {
    this.id_user = +localStorage.getItem('userId');
    this.createSongForm = this.fb.group({
      name: [''],
      lyric: [''],
      authors: [''],
      singers: [''],
      description: ['']
    });
    this.artistService.getAll().subscribe(resp =>{
      this.singers = resp;
    });
    this.artistService.getAll().subscribe(resp =>{
      this.authors = resp;
    });
    this.artistService.getAll().subscribe(resp =>{
      this.singersFilter = resp;
    });
    this.artistService.getAll().subscribe(resp =>{
      this.authorsFilter = resp;
    });
  }

  createSong(event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'mp3/featured/' + randomString + new Date().getTime();
    this.fileSong = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.fileSong).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.song.fileUrl = url;
          console.log(url);
        });
      })
    ).subscribe();
  }

  createImage(event){
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' + randomString + new Date().getTime();
    this.fileImage = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.fileImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.song.imageUrl = url;
          console.log(url);
        });
      })
    ).subscribe();
  }
  submit() {
    let data = this.createSongForm.value;
    this.song.name = data.name;
    this.song.description = data.description;
    this.song.lyric = data.lyric;
    this.song.s_singers = [];
    this.song.s_authors = [];
    for (let i = 0; i < this.singersSelected.length; i++) {
      this.song.s_singers[i] = {};
      this.song.s_singers[i].id = this.singersSelected[i];
    }
    for (let i = 0; i < this.authorsSelected.length; i++) {
      this.song.s_authors[i] = {};
      this.song.s_authors[i].id = this.authorsSelected[i];
    }
    this.song.postTime = new Date();
    this.songService.saveSong(this.song,this.id_user).subscribe(() => {
        this.toastService.success("Quay lại trang chủ sau 3s","Tạo bài hát thành công" )
        setTimeout(()=>{
            this.router.navigateByUrl("")
        }, 3000)
    }, error => {
      this.toastService.error("Quay lại trang chủ sau 3s", "Tạo bài hát ko thành công" )
      setTimeout(()=>{
        this.router.navigateByUrl("")
      }, 3000)
    });


  }

  filterByArtist(artistName,artists: IArtist[]) {
    return artists.filter(
      artist => {
        return artist.fullName.indexOf(artistName) != -1;
      }
    );
  }
  findAuthors(event) {
    this.authorsFilter = (event) ? this.filterByArtist(event,this.authors) : this.authors;
  }
  findSingers(event) {
    this.singersFilter = (event) ? this.filterByArtist(event,this.singers) : this.singers;
  }
}
