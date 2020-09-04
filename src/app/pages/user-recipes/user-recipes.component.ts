import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit {

  public receta: Recipe[] = [];
  constructor( private servicio: CookbookService,  private router: Router) { }
  ngOnInit(): void {
    this.receta = this.servicio.getRecipes();
    console.log(this.receta);
  }

  showRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
  
  
}