import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  username: any;
  repos: object[];
  repos_names: any[] = [];

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.username = params.get("username");
      })

    // get data
    this.usersService.getRepos(this.username)
      .subscribe(data => {
        // console.log(data);
        this.repos = data;
        this.repos.forEach((repo: any) => {
          console.log("repo name: ", repo["name"]);
          this.repos_names.push(repo["name"]);
        })
      })
  }

}
