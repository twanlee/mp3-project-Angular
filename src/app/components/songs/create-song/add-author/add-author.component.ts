import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  @Output() authorNames: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  getAuthor(event){
    let value = event.target.value;
    this.authorNames.emit(value);
    console.log(this.authorNames)
  }
}
