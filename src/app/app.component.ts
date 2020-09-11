import { TriggersService } from './shared/triggers.service';

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public navigation: boolean;

  constructor(private apiNavigation: TriggersService) {

    this.navigation = apiNavigation.navigationPages;

  }


  hide(e) {
    
    return this.navigation = e;
  }

}


