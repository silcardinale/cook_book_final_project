import { TriggersService } from './../../shared/triggers.service';
import { SearchRecipeService } from './../../shared/search-recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../shared/user.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public animation: boolean;
  public user;
  public profileUser: User;
  public recipesUser: Recipe[];
  public navigation: boolean;

  constructor( private userService: UserService, public apiSearchRecipe: SearchRecipeService, public apiNavigation: TriggersService) {

    this.animation = false;
    this.profileUser = this.userService.userProfile;
    this.navigation = this.apiNavigation.navigationPages;
  }

    show() {

      if (document.getElementById('edit-profile').style.visibility === 'visible') {
        this.animation = false;

        document.getElementById('edit-profile').style.visibility = 'hidden';
      } else {
        document.getElementById('edit-profile').style.visibility = 'visible';
        document.getElementById('edit-profile').style.opacity = '1';
        this.showProfile()
        this.animation = true;
      }

    }


    editProfile( password: string, email: string, picture: string){
      
      let user1 = new User(this.profileUser.user_name, password, email, picture,  this.profileUser.user_id);

      this.userService.editUserProfile(user1).subscribe( data => this.user = data);
    }


    showProfile(){

      this.profileUser = this.userService.userProfile;
    
    }

    
    deleteProfile()
    {
      this.userService.deleteUser(this.userService.userProfile.user_id).subscribe((data)=>
      {
        console.log(data)
        console.log(this.userService.userProfile.user_id)
      }
      )
    }



  ngOnInit(): void {
    this.showProfile();
  }

}
