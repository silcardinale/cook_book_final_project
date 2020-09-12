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
  public following: Followed;
  public UserFollowing: User[];

  constructor(private cookbookService: CookbookService, public followers: FollowersService, public apiSearchRecipe: SearchRecipeService, private userService: UserService) {
    this.count = 0;
    this.colorHat = false;
    this.following = this.followers.followrelation;
    
  }

  showProfile(){

    this.profile = this.userService.userProfile;
    this.userService.getUser(this.following.follower_id).subscribe((data: User[]) => {
      this.UserFollowing = data;
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

    this.showProfile;
  }

}
