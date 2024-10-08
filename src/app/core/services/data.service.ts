import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user?: UserModel;

  constructor() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  }
}
