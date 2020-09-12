import { Followed } from './../../models/followed';
import { FollowersService } from './../../shared/followers.service';
import { User } from './../../models/user';
import { Comments } from './../../models/comments';
import { UserService } from 'src/app/shared/user.service';
import { CommentsService } from './../../shared/comments.service';
import { Recipe } from 'src/app/models/recipe';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { FavoriteService } from 'src/app/shared/favorite.service';
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
    public comments: Comment[];
    public numberComment: number;
    public user: User;
    public nuevoFavorito;
    public follow: Followed;


    constructor( private favService: FavoriteService, private userService: UserService, public apiSearchRecipe: SearchRecipeService, private cookbookService: CookbookService, public apiComments: CommentsService, public followers: FollowersService) {


    }

    showRecipeResult() {
        this.resultRecipe = this.apiSearchRecipe.resultRecipe;
        this.userService.getUser(this.resultRecipe[0].user_id).subscribe((data: User) => this.user = data);

        this.apiComments.showComments(this.resultRecipe[0].recipe_id).subscribe((data: Comment[]) => this.comments = data);

        this.apiComments.numberComments(this.resultRecipe[0].recipe_id).subscribe((data: number) =>  {
            this.numberComment = data;
            this.apiComments.numberComment = this.numberComment;
         });
    }

    postComment(description: string, recipe_id: number){
        let comment = new Comments(this.userService.userProfile.user_name, description, this.resultRecipe[0].recipe_id, this.userService.userProfile.user_id);

        this.apiComments.createComment(comment).subscribe((data) => {
            this.showRecipeResult();
            this.ngOnInit;
      });

        this.apiComments.numberComments(recipe_id).subscribe((data: number) => {
            this.numberComment = data;
            this.apiComments.numberComment = this.numberComment;
      });
    }

    following(value){

      this.follow = new Followed(value, this.userService.userProfile.user_id);
      this.followers.follow(this.follow).subscribe((data) => {
        console.log(data)
      });
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











