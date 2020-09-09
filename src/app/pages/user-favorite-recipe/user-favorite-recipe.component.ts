import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-favorite-recipe',
  templateUrl: './user-favorite-recipe.component.html',
  styleUrls: ['./user-favorite-recipe.component.scss']
})
export class UserFavoriteRecipeComponent implements OnInit {
  
  public receta: Recipe[] = [];
  constructor( private servicio: CookbookService,  private router: Router) { }
  ngOnInit(): void {
    
  }

  showRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
  
  
}
