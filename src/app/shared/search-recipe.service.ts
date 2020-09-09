import { Recipe } from 'src/app/models/recipe';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchRecipeService {
  private url = 'http://localhost:3000';

  public resultRecipes: Recipe[];
  public resultRecipe: Recipe[];


  constructor(private http: HttpClient) {

      this.resultRecipes = [];

  }

  showIngredients() {
      return this.http.get(this.url + '/ingredients');
  }

  showRecipes() {
      return this.http.get(this.url + '/');
  }

  searchRecipes(ingredients: string) {

      return this.http.get(this.url + ingredients);
  }

  newRecipes(recipe: Recipe) {

    return this.http.post(this.url + '/recipes', recipe);
  }



}