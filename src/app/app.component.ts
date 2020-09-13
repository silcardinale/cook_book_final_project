import { UserService } from 'src/app/shared/user.service';
import { LocalStorageService } from './shared/local-storage.service';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public login: User;

  constructor(private router: Router, public localStorage: LocalStorageService, public userService: UserService, public firestore: AngularFirestore) {

  }


    logInKeep() {
      if (this.localStorage.get('log') !== null) {
        this.userService.loginUser(this.localStorage.get('log')).subscribe((data: User) => {
          this.userService.userProfile = data[0];
          this.router.navigate(['/', 'searchRecipe']);

        });
      } else {
        return;
      }
    }

    ngOnInit() {
      this.router.navigate(['**']);
      this.logInKeep();
    }

}


