import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {

  // user object from parent
  @Input() user: object;
  userObj: User;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user.currentValue !== undefined) {
      var user = changes.user.currentValue;

      this.userObj = {
        username: user.login,
        profile_pic: user.avatar_url,
        repos: user.public_repos,
        followers: user.followers,
        following: user.following
      }
    }
  }

}
