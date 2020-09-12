import { FollowersService } from './../../shared/followers.service';
import { CommentsService } from './../../shared/comments.service';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit {

  public profile: User;
  public resultRecipe: Recipe[];
  public numberComment: number;
  public animation: boolean;
  public arrow: any;
  public recipe_id: number;

  constructor(private router: Router, public apiSearchRecipe: SearchRecipeService, private userService: UserService, public follow: FollowersService) {

    this.animation = false;

   }

  showProfile(){

    this.profile = this.userService.userProfile;

    this.apiSearchRecipe.showRecipesUser(this.profile.user_id).subscribe((data: Recipe[]) => this.resultRecipe = data);

  }

  goToRecipe(recipe_id: number) {
    this.apiSearchRecipe.resultRecipe = this.resultRecipe.filter(recipe => recipe.recipe_id === recipe_id);
    this.router.navigate(['/', 'recipe']);
  }

  goToFollowers(recipe_id: number) {
    this.userService.getUser(this.follow.followrelation.follower_id).subscribe((data: User) => {
        this.follow.following = data;
        this.router.navigate(['/', 'followers']);
    });
  }


  popUp(recipe_id: number) {
    this.recipe_id = recipe_id;
    if ( document.getElementById('delete-window').style.visibility === 'visible') {
        document.getElementById('delete-window').style.visibility = 'hidden';
        this.animation = false;
    } else {
        document.getElementById('delete-window').style.visibility = 'visible';
        document.getElementById('edit-profile').style.opacity = '1';
        this.animation = true;
    }

  }

  deleteRecipe(){
      this.apiSearchRecipe.deleteRecipe(this.recipe_id).subscribe(data => this.ngOnInit());
  }


  ngOnInit(): void {
    
    this.showProfile();
    

  }

}
