import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-singer',
  templateUrl: './add-singer.component.html',
  styleUrls: ['./add-singer.component.css']
})
export class AddSingerComponent implements OnInit {
  @Output() singerNames: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    }
  getSinger(event){
    let value = event.target.value;
    this.singerNames.emit(value);
    console.log(this.singerNames)
  }
}
