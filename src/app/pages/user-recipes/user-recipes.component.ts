import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
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

  constructor(private router: Router, public apiSearchRecipe: SearchRecipeService, private userService: UserService) { }

  showProfile(){

    this.profile = this.userService.userProfile;

    this.apiSearchRecipe.showRecipesUser(this.profile.user_id).subscribe((data: Recipe[]) => this.resultRecipe = data);

  }

  goToRecipe(recipe_id: number) {
    this.apiSearchRecipe.resultRecipe = this.resultRecipe.filter(recipe => recipe.recipe_id === recipe_id);
    this.router.navigate(['/', 'recipe']);

  }

  deleteRecipe(recipe_id: number) {
    this.apiSearchRecipe.deleteRecipe(recipe_id).subscribe(data => this.ngOnInit());
    

  }
  
  ngOnInit(): void {
    
    this.showProfile();
    

  }

}
