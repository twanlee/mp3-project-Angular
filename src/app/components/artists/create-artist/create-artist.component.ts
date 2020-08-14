import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IArtist} from '../../../interfaces/iartist';
import {ArtistService} from '../../../services/artist/artist.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
              private storage: AngularFireStorage){ }

  ngOnInit(): void {
    this.createArtistForm = this.fb.group({
      fullName: [''],
      information: ['']
    });
  }
  upload(event){
    const randomString = Math.random().toString(36).substring(7);
    const filePath: string = 'image/featured/'+ randomString+ new Date().getTime();
    const fileRef = this.storage.ref(filePath);
    this.file = event.target.files[0];
    this.storage.upload(filePath,this.file).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.url = url;
        })
      })
    ).subscribe();
  }
  submit(){
    this.artist = this.createArtistForm.value;
    this.artist.avatarUrl = this.url;
    this.as.saveArtist(this.artist).subscribe(()=>{
      console.log("Created Artist !!!")
    });
  }

}
