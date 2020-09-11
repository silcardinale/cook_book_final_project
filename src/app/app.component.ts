import { Router } from '@angular/router';
import { TriggersService } from './shared/triggers.service';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public login: boolean;

  constructor(private router: Router, private apiNavigation: TriggersService) {
    
    

  }

}


