import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TheJudge';
  user = null;
  isLoading: boolean = true;

  constructor() {
    this.user = new User(
      localStorage.getItem('fname'),
      localStorage.getItem('lname'),
      localStorage.getItem('username'),
      localStorage.getItem('password')
    );

    if (!this.user.fname || !this.user.lname || !this.user.username || !this.user.password) {
      this.user = null;
    }
  }

  ngOnInit(){
    this.isLoading = false;
  }

  setUser(user: any) {
    this.user = user;
    if (user) {
      localStorage.setItem('fname', user.fname);
      localStorage.setItem('lname', user.lname);
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
    } else {
      localStorage.removeItem('fname');
      localStorage.removeItem('lname');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }

  setLoader($event) {
    this.isLoading = $event;
  }
}
