import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User {
    const user = new User(
      localStorage.getItem('fname'),
      localStorage.getItem('lname'),
      localStorage.getItem('username'),
      localStorage.getItem('password')
    );

    if (user.fname && user.lname && user.username && user.password) {
      return user;
    }
    return null;
  }
}
