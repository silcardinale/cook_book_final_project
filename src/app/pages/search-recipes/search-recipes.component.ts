import { User } from './../../models/user';
import { FollowersService } from './../../shared/followers.service';
import { Ingredients } from './../../models/ingredients';
import { Router } from '@angular/router';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { NgForm, NgModel } from '@angular/forms';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgOption } from '@ng-select/ng-select';



@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})

export class SearchRecipesComponent implements OnInit {

  public recipes: Recipe[];
  public ingredients;
  public count: number;
  public type: string;
  public resultRecipe: Recipe[] ;
  public ingredientsSelected;
  public dropdownList: NgOption[];


  constructor( private router: Router, public apiSearchRecipe: SearchRecipeService, public followers: FollowersService, public userService: UserService) {

      this.ingredients;
      this.count = 0;
      this.type  = '';
      this.recipes =[];
      this.ingredientsSelected = [];
   }

    onAdd(event: any) {
        this.ingredientsSelected.push(event.$ngOptionLabel);
        console.log(this.ingredientsSelected)
    }

    onRemove(event: any) {
        let ingredientRemove;
        let value = event.label;
        ingredientRemove = this.ingredientsSelected.filter(ingredient => ingredient !== value);
        this.ingredientsSelected = ingredientRemove;
        console.log(this.ingredientsSelected);
    }

    valueFood(element) {
        this.type = element;
    }

    showRecipes() {
        this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => this.recipes = data);
        this.apiSearchRecipe.showIngredients().subscribe((data: Ingredients[]) => {
            this.ingredients = data;
            for (let i = 0; i < this.ingredients.length; i++) {
                this.dropdownList[i].ingredients = this.ingredients[i].name;
        }

        });

        this.followers.getFollowing(this.userService.userProfile.user_id).subscribe((data: User[]) => this.followers.following = data);

    }

    searchRecipes(form: NgForm){
        if (form.valid && this.ingredientsSelected && this.type) {
            let string = '';

            for (let i = 0; i < this.ingredientsSelected.length; i++) {
                string += `&ingredient${i + 1}=${this.ingredientsSelected[i]}`;
            }

            string = '/recipes/search?&type=' + this.type + string + '&interrogacion=' + this.ingredientsSelected.length;

            this.apiSearchRecipe.searchRecipes(string).subscribe((data: Recipe[]) => {
            this.apiSearchRecipe.resultRecipes  = data;
            this.router.navigate(['/', 'recipes']);

            });
        } else {

            this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => {

                this.apiSearchRecipe.resultRecipes  = data;
                this.router.navigate(['/', 'recipes']);
            });
        }
    }

    showRecipeCarrousel(i)  {

        this.resultRecipe = this.recipes.filter(recipe => recipe.recipe_id === i);
        [this.apiSearchRecipe.resultRecipe]= this.resultRecipe;
        this.router.navigate(['/', 'recipe']);
    }

  ngOnInit(): void {
        this.showRecipes();
       

     }

}
