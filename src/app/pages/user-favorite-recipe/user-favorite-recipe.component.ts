import { SearchRecipeService } from './../../shared/search-recipe.service';
import { FollowersService } from './../../shared/followers.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-favorite-recipe',
  templateUrl: './user-favorite-recipe.component.html',
  styleUrls: ['./user-favorite-recipe.component.scss']
})
export class UserFavoriteRecipeComponent implements OnInit {

  public profile: User;
  public receta: Recipe[] = [];
  public following: User;

  constructor( private servicio: CookbookService,  private router: Router, public followers: FollowersService, public apiSearchRecipe: SearchRecipeService, private userService: UserService) {

    this.following = this.followers.following;
    
   }


   showProfile(){

    this.profile = this.userService.userProfile;

  }


  ngOnInit(): void {

    this.showProfile;
    
  }

 

  showRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
  
  
}
