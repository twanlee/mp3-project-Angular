import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongService} from "../../../services/songs/song.service";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@Component({
  selector: 'app-search-song-form',
  templateUrl: './search-song-form.component.html',
  styleUrls: ['./search-song-form.component.css']
})
export class SearchSongFormComponent implements OnInit {
  searchForm: FormGroup;
  keyword:any;
  songsName: string[];
  filterResult: string[];

  constructor(
    private route: Router, private  fb: FormBuilder, private songService: SongService
  ) { }

  ngOnInit(): void {
    this.songService.getAllSongsName().subscribe(data => {
      this.songsName = data;
    })
  }

  search() {
    this.route.navigate([this.keyword,'search'])
  }

  filterByKeyword() {
    this.filterResult = (this.keyword) ? this.filter(this.keyword) : this.songsName;
    console.log(this.filterResult);
  }

  filter(keyword){
    return this.songsName.filter(name => {
      return name.toLocaleLowerCase().indexOf(keyword.toLowerCase()) != -1;
    });
  }
}
