import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  fname = '';
  lname = '';
  @Input() user: User;
  @Output() op = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {

  }

  onClick(event: any) {
    this.user = new User(this.fname, this.lname, this.username, this.password);
    this.op.emit(this.user);
  }

}
