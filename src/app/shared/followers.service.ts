import { User } from './../models/user';
import { Followed } from './../models/followed';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private url = 'http://localhost:3000/recipe';

  public following: User[];
  public followed: User;
  public followrelation: Followed;
  public followStatus: boolean;
  public followers;

  constructor(private http: HttpClient) {

    this.following;
    this.followStatus = false;
    this.followers;

  }

  getFollowing(id: number) {
    return this.http.get(this.url + '/followed/' + id);
  }


  getFollowers(user_id){
    return this.http.get(this.url + '/followers/' + user_id);
    }



  getFollowingStatus(user_id, follower_id) {
    return this.http.get(this.url + '/followed/status/' + user_id + '/' + follower_id);

  }

  follow(params) {
    return this.http.post(this.url + '/followed', params);
  }

  followAmount(id: number){
    return this.http.get(this.url + '/followed/count/' + id);
  }

  insertFollower(followers_id, user_id){
     return this.http.post(this.url + '/followers/', followers_id, user_id)
    }


  unfollow(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' }),
        body: {
          id: id
        }};
    return this.http.delete(this.url + '/followed',  httpOptions);
  }

}
