import { Router } from '@angular/router';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import {NgForm} from '@angular/forms';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';



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


  constructor( private router: Router, private recipesList: CookbookService, public apiSearchRecipe: SearchRecipeService) {

      this.ingredients = [];
      this.count = 0;
      this.type  = '';
      this.recipes =[];
   }

      showInput(value: string) {
          if (value && this.count < 5 ) {
              this.ingredients.push(value);
              this.count++;
          }

          else if (this.count === 5) {
              document.getElementById('btn-ingredients').style.visibility = 'hidden';

          } else {

            return;
          }
          return this.ingredients;
      }

      valueDificulty(element) {
          this.type = element;
      }

      showRecipes() {
          this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => this.recipes = data);

      }

      searchRecipes(){
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

  ngOnInit(): void {
        this.showRecipes();

  }

}
