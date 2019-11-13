import {Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-group';

  constructor(private userService: UserService) {

  }

  logout() {
    this.userService.checkLogin = 'true';
    this.userService.checkUser(this.userService.userOnline.email).status = false;
  }
}
