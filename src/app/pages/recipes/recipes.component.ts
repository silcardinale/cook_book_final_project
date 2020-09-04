import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { CookbookService } from '../../shared/cookbook.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [];
  public arrow: void;

  constructor(private cookbookService: CookbookService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.cookbookService.getRecipes();
    console.log(this.recipes);
  }

  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }
  showRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
}