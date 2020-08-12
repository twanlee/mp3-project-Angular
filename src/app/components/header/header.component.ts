import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {stringify} from '@angular/compiler/src/util';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search: FormGroup;
  url = "";

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.url = window.location.href;
    this.tokenStorage.saveUrl(this.url);
  }

}
