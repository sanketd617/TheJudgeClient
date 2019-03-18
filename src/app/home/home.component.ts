import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user: User;
  @Input() isLoading: boolean;
  @Output() op = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  loadProblem(){
    this.op.emit(true);
    const self = this;
    setTimeout(() => {
      self.op.emit(false);
    }, 5000);
  }
}
