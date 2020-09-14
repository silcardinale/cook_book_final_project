import { AngularFirestore } from '@angular/fire/firestore';
import { LocalStorageService } from './../../shared/local-storage.service';
import { TriggersService } from './../../shared/triggers.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public animation: boolean;
  public user: User;


  constructor(private userService: UserService, private router: Router, public apiNavigation: TriggersService, private localStorage: LocalStorageService, public afAuth: AngularFireAuth, private afs: AngularFirestore) {

    this.animation = false;
    this.user = <User>{};
    this.apiNavigation.login = false;

  }

    show() {

      if (document.getElementById('edit-profile').style.visibility === 'visible') {
        this.animation = false;

        document.getElementById('edit-profile').style.visibility = 'hidden';
      } else {
        this.animation = true;
        document.getElementById('edit-profile').style.visibility = 'visible';
        document.getElementById('edit-profile').style.opacity = '1';

      }

    }

    login(user_name: string, password: string){

      this.user = new User(user_name, password);
      this.apiNavigation.login = true;
      this.userService.loginUser(this.user).subscribe((data: User) => {
        this.userService.userProfile = data[0];
        this.localStorage.set('log', this.user);
        this.router.navigate(['/', 'searchRecipe']);

      });

    }

    loginSocial(provider){
      this.userService.loginSocial(provider);
    }

    submitted = false;


    onSubmit(userForm: NgForm) { 
      console.log(userForm)
      this.user = new User(userForm.value.user_name, userForm.value.password);
  
      if(userForm.valid){
        this.userService.userProfile = this.user

        this.userService.loginUser(this.user).subscribe((data: User) => {
          this.userService.userProfile = data[0];
 
          if(data != undefined){

            this.localStorage.set('log', this.user);
            this.router.navigate(['/', 'searchRecipe']);
  
          }

        });
        
        
      }
          
      if(userForm.invalid){
        Object.values( userForm.controls ).forEach ( control =>{

          control.markAsTouched();

        })
      }
      console.log(userForm.value);
    
    }


  ngOnInit(): void {  


  }



}

