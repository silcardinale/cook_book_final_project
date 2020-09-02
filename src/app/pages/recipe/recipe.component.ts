import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookbookService } from 'src/app/shared/cookbook.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any = {};
  public colorHat: boolean;
  public count: number;
  
  constructor(private cookbookService: CookbookService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {

      //console.log(params ['id']);

      this.recipe = this.cookbookService.getRecipe(params['id']);

    });
  }
  ngOnInit(): void {
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











