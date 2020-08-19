import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  defaultImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/meomp3-5e362.appspot.com/o/image%2Ffeatured%2Flight-blue-gold-audio-headphones-flat-lay-two-color-background_103577-4744.jpg?alt=media&token=7566515e-d27c-4d12-a18a-4e118aa599ab';
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
      name: ['', [Validators.required]],
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
    this.song.fileUrl = '';
    this.song.imageUrl = '';
  }

  createSong(event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'mp3/featured/' + randomString + new Date().getTime();
    this.fileSong = event.target.files[0];
    if( this.fileSong.type === 'audio/mpeg'){
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.fileSong).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.song.fileUrl = url;
            console.log(url);
          });
        })
      ).subscribe();
    } else {
      alert("Không đúng định dạng file mp3")
    }
  }

  createImage(event){
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' + randomString + new Date().getTime();
    this.fileImage = event.target.files[0];
    console.log(this.fileImage.type);
    if( this.fileImage.type === 'image/jpeg' ){
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.fileImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.song.imageUrl = url;
            console.log(url);
          });
        })
      ).subscribe();
    } else {
      alert("Không phải định dạng ảnh")
    }
  }
  submit() {
    let data = this.createSongForm.value;
    this.song.name = data.name;
    this.song.description = data.description;
    this.song.lyric = data.lyric;
    this.song.s_singers = [];
    this.song.s_authors = [];
    if( this.song.imageUrl.length < 10){
      this.song.imageUrl = this.defaultImageUrl;
    }
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
        this.toastService.success("Quay lại trang chủ sau 3s","Tạo bài hát thành công" );
        setTimeout(()=>{
            this.router.navigateByUrl("")
        }, 3000)
    }, error => {
      this.toastService.error("Quay lại trang chủ sau 3s", "Tạo bài hát ko thành công" );
      setTimeout(()=>{
        this.router.navigateByUrl("")
      }, 3000)
    });


  }

  filterByArtist(artistName,artists: IArtist[]) {
    return artists.filter(
      artist => {
        return artist.fullName.toLowerCase().indexOf(artistName.toLowerCase()) != -1;
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
