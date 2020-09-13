import { Recipe } from './../../models/recipe';
import { Followed } from './../../models/followed';
import { FollowersService } from './../../shared/followers.service';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrls: ['./follow-page.component.scss']
})
export class FollowPageComponent implements OnInit {

  public colorHat: boolean;
  public count: number;
  public arrow: void;
  public profile: User;
  public following: Followed[];
  public userFollowing: User[];
  public followingUser: User[];
  public followingAmount: number;
  public allFollowers;

  constructor(private cookbookService: CookbookService, public followers: FollowersService, public apiSearchRecipe: SearchRecipeService, private userService: UserService) {
    this.count = 0;
    this.colorHat = false;

  }

  showProfile(){

    this.profile = this.userService.userProfile;
    this.userFollowing = this.followers.following;
    this.followers.followAmount(this.profile.user_id).subscribe((data: number) => console.log(this.followingAmount = data));

    this.allFollowers = this.followers.getFollowers(this.userService.userProfile.user_id).subscribe((data) =>{
        this.followers.followers = data;
    })

  }

  changeColor() {

    if (this.colorHat === false) {

      this.colorHat = true;
      this.count++;

    } else if (this.count > 0) {
      this.colorHat = false;
      this.count--;

    }
  }
  
  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }

  ngOnInit(): void {

    this.showProfile();
  }

}
