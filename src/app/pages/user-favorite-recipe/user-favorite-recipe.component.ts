import { SearchRecipeService } from './../../shared/search-recipe.service';
import { FollowersService } from './../../shared/followers.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/shared/favorite.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-favorite-recipe',
  templateUrl: './user-favorite-recipe.component.html',
  styleUrls: ['./user-favorite-recipe.component.scss']
})
export class UserFavoriteRecipeComponent implements OnInit {
  public profile: User;
  public favoriteRecipe 
  public favoriteRecipes
  public receta: Recipe[] = [];
  public favs
  public resultRecipe: Recipe[];
  public owner:User
  public eliminar
  public animation: boolean;
  public following: User;




    constructor( private servicio: CookbookService, public followers: FollowersService, private router: Router,  private userService: UserService, private apiSearchRecipe: SearchRecipeService, private favService:  FavoriteService) {
      this.animation = false;
      this.favs  =  this.favService.favoriteRecipe
      this.following = this.followers.following;
    }
  
    showProfile(){
        this.profile = this.userService.userProfile;
        console.log(this.profile)
    }

    userFav(){
    this.favService.getFavoritefromUser(this.userService.userProfile.user_id).subscribe((data)=> {
      console.log("allfavs",data)
      return this.favoriteRecipes = data;
      });
    }



    showRecipe(index: number) {
      this.router.navigate(['/recipe', index]);
    }

    goToRecipe(recipe_id: number) {
      this.apiSearchRecipe.resultRecipe = this.favoriteRecipes.filter(recipe => recipe.recipe_id === recipe_id);
      this.router.navigate(['/', 'recipe']);
    }

//info del usuario que ha publicado la receta
  /*userRecipe(owner_id){
    this.favService.getOwnerRecipe(owner_id).subscribe((data)=> {
      console.log("owner",data)
      this.ngOnInit;
      return this.owner = data;
      
      });
  }*/
/*
  ownerProfile(owner_id){
    this.userService.allUsers.filter(element => element.user_id === owner_id)
    console.log("owner", owner_id)
  }*/

    popUp(user_fav_id) {
      this.eliminar = user_fav_id
        if ( document.getElementById('delete-window').style.visibility === 'visible') {
            document.getElementById('delete-window').style.visibility = 'hidden';
            this.animation = false;
        } else {
            document.getElementById('delete-window').style.visibility = 'visible';
            document.getElementById('edit-profile').style.opacity = '1';
            this.animation = true;
        }
    }


    deleteFav(){
       this.favService.removeFavorite(this.eliminar).subscribe(data => this.ngOnInit());
    }


  ngOnInit(): void {
      this.showProfile();
      this.userFav();
  }

}
