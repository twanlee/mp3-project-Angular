import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StorageService} from '../../services/storage.service';

declare var $: any;
declare var APlayer: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    let library: any;
    let ap = new APlayer({
      container: document.getElementById('aplayer'),
      listFoled: true,
      fixed: true,
      audio: []
    });
    this.storageService.watchStorage().subscribe(data => {
        library = JSON.parse(sessionStorage.getItem('library'));
        ap.list.add(library[0]);
        console.log(ap.audio);
    });

  }

}
