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
      listFoled: true,
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
        ap.list.add(library[0]);
        this.toastService.success("Thêm bài hát vào danh sách phát thành công")
    });

  }

}
