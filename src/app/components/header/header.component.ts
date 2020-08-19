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
  urlPrevious = "";
  showName = false;
  firstName: string;
  lastName: string;
  isLoggedIn = false;
  userId: any;
  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.urlPrevious = window.location.href;
    this.tokenStorage.saveUrl(this.urlPrevious);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
      this.userId = localStorage.getItem("userId");
    }
    this.showName = this.userId != null;
  }
  logOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
