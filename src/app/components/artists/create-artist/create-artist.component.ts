import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IArtist} from '../../../interfaces/iartist';
import {ArtistService} from '../../../services/artist/artist.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {
  createArtistForm: FormGroup;
  artist: IArtist = {};
  url: string = '';
  file: File;
  constructor(private as: ArtistService,
              private fb: FormBuilder,
              private router: Router,
              private storage: AngularFireStorage,
              private toastService: ToastrService){ }

  ngOnInit(): void {
    this.createArtistForm = this.fb.group({
      fullName: [''],
      information: ['']
    });
  }
  upload(event){
    const randomString = Math.random().toString(36).substring(7);
    const filePath: string = 'image/featured/'+ randomString+ new Date().getTime();
    this.file = event.target.files[0];
    if(this.file.type === 'image/jpeg'){
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.file).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe(url =>{
            this.url = url;
          })
        })
      ).subscribe();
    } else {
      alert("Không phải định dạng file ảnh")
    }
  }
  submit(){
    this.artist = this.createArtistForm.value;
    this.artist.avatarUrl = this.url;
    this.as.saveArtist(this.artist).subscribe(()=>{
      this.toastService.success("Tạo nghệ sĩ thành công!")
    });
    this.router.navigateByUrl("");
  }

}
