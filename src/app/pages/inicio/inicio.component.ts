import { User } from './../../models/user';
import { UserService } from 'src/app/shared/user.service';
import { LocalStorageService } from './../../shared/local-storage.service';
import { TriggersService } from './../../shared/triggers.service';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  public animation: boolean;
  public test: boolean;
 
  constructor(public apiNavigation: TriggersService, public localStorage: LocalStorageService, public userService: UserService, private router: Router) {
    this.animation = false;

  }

  show() {
    if (document.getElementById('quienes-somos').style.visibility === 'visible') {
      this.animation = false;

      document.getElementById('quienes-somos').style.visibility = 'hidden';
    } 
    else {
      document.getElementById('quienes-somos').style.visibility = 'visible';
      document.getElementById('quienes-somos').style.opacity = '1';
      this.animation = true;
    }
  }

  onSubmit(form) {
    console.log(form.value);
}

  ngOnInit(): void {


    this.logInKeep();
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

}
