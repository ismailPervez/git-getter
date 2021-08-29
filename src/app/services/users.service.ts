import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const API_KEY = environment.github_api_key;
    const baseUrl = "https://api.github.com/users";
  
    return this.http.get<any>(baseUrl);
  }
}
