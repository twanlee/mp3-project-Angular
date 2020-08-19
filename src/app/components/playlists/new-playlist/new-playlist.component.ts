import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlaylistService} from '../../../services/playlist/playlist.service';
import {IPlaylist} from '../../../interfaces/iplaylist';
import {SongService} from '../../../services/songs/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  createPlaylistForm: FormGroup;
  playList: IPlaylist = {};
  id = +localStorage.getItem('userId');
  fileImage: File;
  constructor(private playlistService: PlaylistService,
              private fb: FormBuilder,
              private songService: SongService,
              private storage: AngularFireStorage,
              private toastService: ToastrService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.createPlaylistForm = this.fb.group({
        title: ['', [Validators.required]]

    });
  }
  submit(){
    let data = this.createPlaylistForm.value;
    this.playList.title = data.title;
    this.playlistService.createPlaylist(this.playList,this.id).subscribe(()=>{
      this.toastService.success("Quay lại âm nhạc của bạn", "Tạo playlist thành công");
      setTimeout(()=>{
        this.router.navigateByUrl("/user/music");
      }, 3000)
    }, error => {
      this.toastService.error("Quay lại trang chủ sau 3s", "Tạo Playlist ko thành công");
      setTimeout(()=>{
        this.router.navigateByUrl("")
      }, 3000)
    })

  }
  uploadImage(event) {
    const randomString = Math.random().toString(36).substring(7);
    const filePath = 'image/featured/' + randomString + new Date().getTime();
    this.fileImage = event.target.files[0];
    if(this.fileImage.type === 'image/jpeg'){
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.fileImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.playList.imgUrl = url;
            console.log(url);
          });
        })
      ).subscribe();
    } else {
      alert("Không phải định dạng file ảnh !!!")
    }
  }
}
