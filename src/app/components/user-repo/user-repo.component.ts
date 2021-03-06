import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { UsersService } from 'src/app/services/users.service';
import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  username: any;
  repos: object[];
  repoObjs: Repo[] = [];

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.username = params.get("username");
      })

    // get data
    this.usersService.getRepos(this.username)
      .subscribe(data => {
        console.log(data);
        this.repos = data;
        this.repos.forEach((repo: any) => {
          // console.log("repo name: ", repo["name"]);
          // repo["description"];
          // html_url
          var repoObj = {
            title: repo["name"],
            description: repo["description"],
            link: repo["html_url"]
          }
          this.repoObjs.push(repoObj);
        })
      })
  }

}


// we need to create 2 classes 1. a repo class, 2 a user class