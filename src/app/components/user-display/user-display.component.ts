import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  // search term
  username: string;
  user: object;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  setUsername(event: any) {
    this.username = event.target.value;
  }

  getUsers(event: any) {
    event.preventDefault();
    console.log(this.username);
    if (!this.username) {
      alert("please enter a username to search")
    }
    else {
      try {
        this.usersService.getData(this.username).subscribe((users) => {
          console.log(users)
          this.user = users;
        })
      }

      catch(error) {
        console.log(error);
      }
    }
  }

}
