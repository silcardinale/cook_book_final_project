import { User } from './../../models/user';
import { FollowersService } from './../../shared/followers.service';
import { Ingredients } from './../../models/ingredients';
import { Router } from '@angular/router';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { NgForm, NgModel } from '@angular/forms';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';



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
  public resultRecipe: Recipe[] ;
  public ingredientsSelected;


  constructor( private router: Router, public apiSearchRecipe: SearchRecipeService, public followers: FollowersService, public userService: UserService) {

      this.ingredients = [{id: 0, itemName : ''}];
      this.count = 0;
      this.type  = '';
      this.recipes =[];
      this.ingredientsSelected = [];
   }

   dropdownList = [];
   selectedItems = [];
   dropdownSettings = {};

    valueIngredient(element: string) {

        this.ingredientsSelected.push(element);

    }

    valueFood(element) {
        this.type = element;
    }

    showRecipes() {
        this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => this.recipes = data);
        this.apiSearchRecipe.showIngredients().subscribe((data: Ingredients[]) => {
            this.ingredients = data;

            for (let i = 0; i<this.ingredients.length; i++) {
                let item = `{"id": ${this.ingredients[i].ingredient_id}, "itemName": "${this.ingredients[i].name}"  }`
                    console.log(item)
                    this.dropdownList.push(item);
          }
           console.log(this.dropdownList)

           
        });

       

          
        
         
        this.followers.getFollowing(this.userService.userProfile.user_id).subscribe((data: User[]) => this.followers.following = data);

    }

    searchRecipes(form: NgForm){
        if (form.valid && this.ingredientsSelected && this.type) {
            let string = '';

            for (let i = 0; i < this.ingredientsSelected.length; i++) {
                string += `&ingredient${i + 1}=${this.ingredientsSelected[i]}`;
            }

            string = '/recipes/search?&type=' + this.type + string + '&interrogacion=' + this.ingredientsSelected.length;

            this.apiSearchRecipe.searchRecipes(string).subscribe((data: Recipe[]) => {
            this.apiSearchRecipe.resultRecipes  = data;
            this.router.navigate(['/', 'recipes']);

            });
        } else {

            this.apiSearchRecipe.showRecipes().subscribe((data: Recipe[]) => {

                this.apiSearchRecipe.resultRecipes  = data;
                this.router.navigate(['/', 'recipes']);
            });
        }
    }
   

    showRecipeCarrousel(i)  {

        this.resultRecipe = this.recipes.filter(recipe => recipe.recipe_id === i);
        [this.apiSearchRecipe.resultRecipe]= this.resultRecipe;
        this.router.navigate(['/', 'recipe']);
    }

  ngOnInit(): void {
        this.showRecipes();

        this.dropdownList = [
            {"id":1,"itemName":"India"},
            {"id":2,"itemName":"Singapore"},
            {"id":3,"itemName":"Australia"},
            {"id":4,"itemName":"Canada"},
            {"id":5,"itemName":"South Korea"},
            {"id":6,"itemName":"Germany"},
            {"id":7,"itemName":"France"},
            {"id":8,"itemName":"Russia"},
            {"id":9,"itemName":"Italy"},
            {"id":10,"itemName":"Sweden"}
          ];
          console.log(this.dropdownList)

        this.dropdownSettings = { 
            singleSelection: false, 
            text: 'Introduce ingredientes',
            selectAllText: 'Selecionar todos',
            unSelectAllText: 'Eliminar todos',
            itemsShowLimit: 5,
            enableSearchFilter: true,
            classes: 'dropdown'
        };
     }

    onItemSelect(item: string){
        this.ingredientsSelected.push(item);
    }

    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }

    onDeSelectAll(items: any){
        console.log(items);
    }

}
