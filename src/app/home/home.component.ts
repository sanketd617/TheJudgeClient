import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading = true;
  user: User = null;
  problemNum = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.isLoading = false;
  }

  loadProblem() {
    if (this.problemNum && !isNaN(this.problemNum)) {
      this.router.navigateByUrl('/problem/' + this.problemNum);
    }
  }
}
