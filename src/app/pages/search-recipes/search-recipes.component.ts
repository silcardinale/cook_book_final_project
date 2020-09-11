import { Ingredients } from './../../models/ingredients';
import { Router } from '@angular/router';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { NgForm, NgModel } from '@angular/forms';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';



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

  constructor( private router: Router, public apiSearchRecipe: SearchRecipeService) {

      this.ingredients = [];
      this.count = 0;
      this.type  = '';
      this.recipes =[];
      this.ingredientsSelected = [];

   }

        valueIngredient(element: string) {

            this.ingredientsSelected.push(element);

}

        valueFood(element) {
            this.type = element;
      }

        showRecipes() {
            this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => this.recipes = data);
            this.apiSearchRecipe.showIngredients().subscribe((data: Ingredients[]) => this.ingredients = data);

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
            this.apiSearchRecipe.resultRecipe = this.resultRecipe;
            this.router.navigate(['/', 'recipe']);
        }

  ngOnInit(): void {
        this.showRecipes();

  }

}
