import {NgForm} from '@angular/forms';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {

  public recipes: Recipe[] = [];
  public ingredients: any[];
  public count: number;

  constructor( private recipesList: CookbookService) {

    this.ingredients = [];
    this.recipes = this.recipesList.getRecipes();
    this.count = 0;

   }

    showInput(ingredient: string) {
      if (ingredient && this.count < 4 ) {
            this.ingredients.push(ingredient);
            this.count++;
      }
      else  if(this.count === 4) {
        this.count++;

      } else {
        return;
      }

      console.log(this.count)
      if (this.count === 4) {

        document.getElementById('btn-ingredients').style.visibility = 'hidden';
      }

    }



  ngOnInit(): void {

  }

}
