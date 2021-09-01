import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getData(username: string): Observable<any> {
    const API_KEY = environment.apiKey;
    var baseUrl = `${environment.apiUrl}${username}?access_token=`;
    return this.http.get<any>(`${baseUrl}${API_KEY}`);
  }

  getRepos(username: string) {
    const API_KEY = environment.apiKey;
    var baseUrl = `${environment.apiUrl}${username}/repos?access_token=`;
    return this.http.get<any>(`${baseUrl}${API_KEY}`);
  }

  // You can use the github api for this. Hitting https://api.github.com/users/USERNAME/repos will list public repositories for the user USERNAME.
}

/**
 * username: string;
 * id: number;
 */