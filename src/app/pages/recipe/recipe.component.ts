import { Ingredients } from './../../models/ingredients';
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
import { LikesService } from 'src/app/shared/likes.service'
import { Favorite } from 'src/app/models/favorite';
import { Likes} from 'src/app/models/likes'

  

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
  public resultRecipe: Recipe;
  public colorHat: boolean;
  public count: number;
  public animation: boolean;
  public arrow: void;
  public comments: Comment[];
  public numberComment: number;
  public user: User;
  public nuevoFavorito;
  public follow: Followed;
  public triggerFollow: boolean;
  public hideDiv: boolean;
<<<<<<< HEAD
  public likes:number;
=======
  public ingredientsRecipe;
>>>>>>> ramaSergio

    constructor( private likeService: LikesService, private favService: FavoriteService, private userService: UserService, public apiSearchRecipe: SearchRecipeService, private cookbookService: CookbookService, public apiComments: CommentsService, public followers: FollowersService) {
      this.hideDiv = false;



    }

    showRecipeResult() {
        this.followers.followStatus = false;
        this.resultRecipe = this.apiSearchRecipe.resultRecipe;
        this.ingredientsRecipe = this.resultRecipe.ingredients.replace(/,/g, ' ').trim().split(' ');
        this.userService.getUser(this.resultRecipe.user_id).subscribe((data: User) => this.user = data[0]);
      this.followers.getFollowingStatus(this.userService.userProfile.user_id, this.resultRecipe.user_id).subscribe((data) => {
            if (this.userService.userProfile.user_id ===  this.apiSearchRecipe.resultRecipe.user_id) {
                return this.hideDiv = true;
            } else if (data[0].status === 'true') {
                return this.followers.followStatus = data[0].status;
            }
        });

        this.userService.getUser(this.resultRecipe.user_id).subscribe((data: User) => this.user = data[0]);
        this.apiComments.showComments(this.resultRecipe.recipe_id).subscribe((data: Comment[]) => this.comments = data);
        this.apiComments.numberComments(this.resultRecipe.recipe_id).subscribe((data) =>  {
            this.numberComment = data[0].count;
            this.apiComments.numberComment = this.numberComment;
<<<<<<< HEAD

         }); 

         this.likesNumber()
=======
         });
>>>>>>> ramaSergio
    }

    postComment(description: string, recipe_id: number){

        let comment = new Comments(this.userService.userProfile.user_name, description, this.resultRecipe.recipe_id, this.userService.userProfile.user_id);

        this.apiComments.createComment(comment).subscribe((data) => {
            this.showRecipeResult();
            this.ngOnInit;
      });

        this.apiComments.numberComments(recipe_id).subscribe((data: number) => {
            this.numberComment = data;
            this.apiComments.numberComment = this.numberComment;
      })
        let textarea = <HTMLInputElement>document.getElementById('textarea');
        if(textarea.value !== textarea.defaultValue) {
          textarea.value = textarea.defaultValue;
        }


    }

    following(){
        let status = true;
        this.follow = new Followed(this.resultRecipe.user_id, this.userService.userProfile.user_id, status);
        this.followers.follow(this.follow).subscribe((data: Followed) => { this.followers.followStatus = true; });
        this.followers.getFollowing(this.userService.userProfile.user_id).subscribe((data: User[]) => this.followers.following = data);
    }

    unfollow() {
<<<<<<< HEAD
        this.followers.unfollow(this.resultRecipe.user_id,this.resultRecipe.user_id).subscribe((data)=> {
=======
        this.followers.unfollow(this.resultRecipe.user_id).subscribe((data) => {
>>>>>>> ramaSergio
            this.followers.followStatus = false;
        });

    }

    addFav(){
<<<<<<< HEAD
      let myFav = new Favorite(0, this.resultRecipe.recipe_id, this.userService.userProfile.user_id)
      this.favService.addFavorite(myFav).subscribe((data) => {
        console.log("favorito", data)
        })
    }

    addLike(){
      let like = new Likes (0,this.userService.userProfile.user_id,this.resultRecipe.recipe_id,0)
      this.likeService.addLike(like).subscribe((data)=> {
        console.log("likes", data)
      })

    }

    likesNumber(){
      this.likeService.getRecipeLikes(this.resultRecipe.recipe_id).subscribe((data:number)=> {
        this.likes = data[0]
        console.log("likesNumber",this.likes)
        this.likeService.likes = this.likes
        })
    }

=======
      let myFav = new Favorite(0, this.resultRecipe[0].recipe_id, this.userService.userProfile.user_id)
      this.favService.addFavorite(myFav).subscribe(data => data)
    }
  
>>>>>>> ramaSergio
    goBack(){

        this.arrow = this.cookbookService.backClicked();
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











