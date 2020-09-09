import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

import {Location} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  public test: boolean;
  
  constructor(private location: Location) {
   
  }


 /* getRecipes(){
    return this.recipes;
  }*/
  
  /*getRecipe(indice:number){
    return this.Recipe.recipes[indice];
  }
  

  /*showNav() {
    return this.test = true;
  }*/

  backClicked() {
    this.location.back();
  }
}
  






