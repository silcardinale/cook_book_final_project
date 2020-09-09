import { Recipe } from 'src/app/models/recipe';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
    public resultRecipe: Recipe[];
    public colorHat: boolean;
    public count: number;
    public animation: boolean;
    public arrow: void;

    constructor(public apiSearchRecipe: SearchRecipeService, private cookbookService: CookbookService) {

    }


    showRecipeResult() {

        this.resultRecipe = this.apiSearchRecipe.resultRecipe;
    }

    goBack(){
        this.arrow = this.cookbookService.backClicked()
    }


  ngOnInit(): void {
       this.showRecipeResult();
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
}











