import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  // search term
  // username: string;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  getUsers(event: any) {
    event.preventDefault();
    this.usersService.getData().subscribe((users) => {
      console.log(users);
    })
  }

}
