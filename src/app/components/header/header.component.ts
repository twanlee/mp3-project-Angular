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
  showName = false;
  firstName: string;
  lastName: string;
  isLoggedIn = false;
  userId: any;
  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.url = window.location.href;
    this.tokenStorage.saveUrl(this.url);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
      this.userId = localStorage.getItem("userId");
    }
    if (this.userId == null) {
      this.showName = false;
    } else {
      this.showName = true;
    }
  }
  logOut() {
    this.tokenStorage.singOut();
    window.location.reload();
  }
}
