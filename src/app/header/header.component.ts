import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private appName = 'TheJudge';
  @Input() user: User;
  @Output() op = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.user = null;
    this.op.emit(null);
  }
}
