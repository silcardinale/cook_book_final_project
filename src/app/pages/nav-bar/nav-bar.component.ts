import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public animation: boolean;

  constructor() {

    this.animation = false;
  }

    show() {

      if (document.getElementById('edit-profile').style.visibility === 'visible') {
        this.animation = false;

        document.getElementById('edit-profile').style.visibility = 'hidden';
      } else {
        document.getElementById('edit-profile').style.visibility = 'visible';
        document.getElementById('edit-profile').style.opacity = '1';
        this.animation = true;
      }

    }

  ngOnInit(): void {
  }

}
