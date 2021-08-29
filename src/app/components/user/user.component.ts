import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {

  // user object from parent
  @Input() user: object;
  username: string;
  profile_pic: string;
  followers: number;
  following: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user.currentValue !== undefined) {
      var user = changes.user.currentValue;
      console.log(user.login);
      this.username = user.login;
      this.profile_pic = user.avatar_url;
      this.followers = user.followers;
      this.following = user.following;
    }
  }

}
