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
  public userFollowing: User [];
  public followingAmount: number;
  public followersAmount: number;
  public allFollowers;

  constructor(private cookbookService: CookbookService, public followers: FollowersService, public apiSearchRecipe: SearchRecipeService, private userService: UserService) {
    this.count = 0;
    this.colorHat = false;
  }

  showProfile(){
    this.profile = this.userService.userProfile;
   this.followers.followingAmount(this.userService.userProfile.user_id).subscribe((data: number) => this.followingAmount = data)
    this.followers.getFollowing(this.userService.userProfile.user_id).subscribe((data: User[]) => {
        console.log(this.userFollowing = data);
    })
  

    this.followers.followersAmount(this.profile.user_id).subscribe((data: number) => console.log(this.followersAmount = data));

   this.followers.getFollowers(this.userService.userProfile.user_id).subscribe((data) =>{
     this.followers.followers = data   
    })

  }
  
  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }

  ngOnInit(): void {

    this.showProfile();
  }

}
