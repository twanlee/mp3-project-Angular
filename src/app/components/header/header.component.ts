import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search: FormGroup;
  name: any;
  showName: boolean;
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    if (this.name == null) {
      this.showName = false;
    }
    else {
      this.showName = true;
    }


  }

}
