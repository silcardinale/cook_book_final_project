import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';;

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
   

   }
   

   showInput(ingredient: string) {
     if (ingredient && this.ingredients.length <= 3 ) {
      this.ingredients.push(ingredient);
      this.count++;
     }
     else {
       return;
     }
  }

 
  ngOnInit(): void {
     

    
  }

}
