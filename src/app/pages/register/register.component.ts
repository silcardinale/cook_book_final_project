import { Component, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from './../../shared/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor( private userService: UserService, private router: Router, private localStorage: LocalStorageService) {
  
   }

  register( email: string, user_name: string, password: string ){

    this.userService.registerUser(new User(email, user_name, password)).subscribe((data:any) => {
      
      this.userService.getUser(data.insertId).subscribe((data:User) => {
        this.userService.userProfile = data;
        this.localStorage.set('log', this.userService.userProfile);
        this.router.navigate(['/', 'searchRecipe']);
      });

      /*if(data != undefined){
        console.log(data)
          this.userService.userProfile = this.user;
          this.localStorage.set('log', this.user);
          this.router.navigate(['/', 'searchRecipe']);

      }else{
       return;
      }*/

    });
  }
  
  /*onSubmit(userForm: NgForm) {
    console.log(userForm);
    console.log(userForm.value.email)
    this.userService.registerUser(new User(userForm.value.email,userForm.value.user_name,userForm.value.password)).subscribe((data) =>{
      console.log(data)
    )}

    if(userForm.valid){
        this.userService.userProfile = this.user;
        this.localStorage.set('log', this.user);
        this.router.navigate(['/', 'searchRecipe'])

    }
          
    if(userForm.invalid){
        Object.values( userForm.controls ).forEach(control =>{

          control.markAsTouched();

        })
    }
    
    console.log(userForm.value);
  }*/

    registerSocial(provider){
      this.userService.registerSocial(provider);
    }
  
  

  ngOnInit(): void {
  }

}

