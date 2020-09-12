import { User } from './../models/user';
import { Followed } from './../models/followed';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private url = 'http://localhost:3000';

  public following: User;
  public followed: User;
  public followrelation: Followed;

  constructor(private http: HttpClient) { 


  }

  follow(params) {
    return this.http.put(this.url + '/followed', + params);
  }
}
