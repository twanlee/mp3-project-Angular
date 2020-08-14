import { Injectable } from '@angular/core';
import {IGender} from '../../interfaces/user/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  groups: IGender[] = [
    {
      id: 1,
      name: 'Nam'
    },
    {
      id: 2,
      name: 'Nữ'
    },
    {
      id: 3,
      name: 'LGBT'
    }
  ];
  constructor() { }
  public getGenderList() {
    return this.groups;
  }
}
