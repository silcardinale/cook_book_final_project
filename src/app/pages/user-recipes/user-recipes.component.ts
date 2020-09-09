import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Recipe } from 'src/app/models/recipe';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit {

 
  public profile: User;

  constructor( private servicio: CookbookService,  private router: Router, private userService: UserService) { }
  
  showProfile(){

    this.profile = this.userService.userProfile;
    console.log(this.profile)
  }
  
  ngOnInit(): void {
    
    this.showProfile();
    

  }

  
  
  
}