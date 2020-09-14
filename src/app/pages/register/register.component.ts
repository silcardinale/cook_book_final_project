import { Component, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor( private userService : UserService, private router: Router) {
  
   }

  register( email: string,user_name: string, password: string ){

    this.userService.registerUser(new User(email,user_name,password)).subscribe((data) =>{
      console.log(data)
      })
  }

  registerSocial(provider){
    this.userService.registerSocial(provider);
  }
  

  ngOnInit(): void {
  }

}
