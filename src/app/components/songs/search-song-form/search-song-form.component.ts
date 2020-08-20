import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../../../services/songs/song.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-song-form',
  templateUrl: './search-song-form.component.html',
  styleUrls: ['./search-song-form.component.css']
})
export class SearchSongFormComponent implements OnInit {
  searchForm: FormGroup;
  keyword: any;
  songsName: string[];
  filterResult: string[];
  finalResult: string[];

  constructor(
    private route: Router, private  fb: FormBuilder, private songService: SongService
  ) {
  }

  ngOnInit(): void {
    this.songService.getAllSongsName().subscribe(data => {
      this.songsName = data;
    });
  }

  search() {
    this.route.navigate(['song' ,this.keyword, 'search']);
  }

  filterByKeyword() {
    this.filterResult = (this.keyword) ? this.filter(this.keyword) : this.songsName;

    if (this.filterResult.length <= 5 || this.filterResult.length == 0) {
      this.finalResult = this.filterResult;
      return this.finalResult;
    } else {
      for (let i = 0; i < this.filterResult.length; i++) {
        if (this.finalResult.length > 3) {
          this.finalResult.splice(0, this.finalResult.length - 3);
        }
        this.finalResult.push(this.filterResult[i]);
      }
    }
  }

  filter(keyword) {
    return this.songsName.filter(name => {
      return name.toLocaleLowerCase().indexOf(keyword.toLowerCase()) != -1;
    });
  }
}
