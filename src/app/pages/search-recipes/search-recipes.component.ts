import { Router } from '@angular/router';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { NgForm, NgModel } from '@angular/forms';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';



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

  constructor( private router: Router, public apiSearchRecipe: SearchRecipeService) {

      this.ingredients = [];
      this.count = 0;
      this.type  = '';
      this.recipes =[];
   }

      showInput(value: string) {
          if (value && this.count === 0 ) {
              this.ingredients.push(value);
              this.count++;
              document.getElementById('btn-ingredients1 ').style.visibility = 'hidden';
          }

          return this.ingredients;
      }

      showInput2(value: string) {
          if (value && this.count < 4 ) {
            this.ingredients.push(value);
            this.count++;
            document.getElementById('btn-ingredients').style.visibility = 'hidden';

        } else {
            return;
      }

          return this.ingredients;

      }

      valueFood(element) {
          this.type = element;
      }

      showRecipes() {
          this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => this.recipes = data);

      }

      searchRecipes(form: NgForm){

          if (form.valid) {
            let string = '';

            for (let i = 0; i < this.ingredients.length; i++) {
                string += `&ingredient${i + 1}=${this.ingredients[i]}`;
            }

            string = '/recipes/search?&type=' + this.type + string + '&interrogacion=' + this.ingredients.length;

            this.apiSearchRecipe.searchRecipes(string).subscribe((data: Recipe[]) => {
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
