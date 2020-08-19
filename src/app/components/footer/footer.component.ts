import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {ToastrService} from 'ngx-toastr';

declare var $: any;
declare var APlayer: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private storageService: StorageService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    let library: any;
    let ap = new APlayer({
      container: document.getElementById('aplayer'),
      listFoled: false,
      fixed: true,
      audio: []
    });
    if (library == null || library == undefined) {
        library = JSON.parse(sessionStorage.getItem('library'));
        if  (library != null && library != undefined) {
          library.map(next => ap.list.add(next))
        }
    }

    this.storageService.watchStorage().subscribe(data => {
        library = JSON.parse(sessionStorage.getItem('library'));
        let isExisted = false;
        let song = library[0];
        ap.list.audios.map(track => {
            if (track.name == song.name && track.url == song.url) {
              isExisted = true;
            }
        });

        if (!isExisted) {
            ap.list.add(library[0]);
            this.toastService.success("Bài hát đã được thêm vào danh sách phát")
        }
        else {
            this.toastService.error("Bài hát đã có sẵn trong danh sách phát")
        }
    });

  }

}
