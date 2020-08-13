import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-song-form',
  templateUrl: './search-song-form.component.html',
  styleUrls: ['./search-song-form.component.css']
})
export class SearchSongFormComponent implements OnInit {
  searchForm: FormGroup;
  keyword:any;
  constructor(
    private route: Router, private  fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.route.navigate([this.keyword,'search'])
  }
}
