import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrls: ['./follow-page.component.scss']
})
export class FollowPageComponent implements OnInit {

  public colorHat: boolean;
  public count: number;

  constructor() {
    this.count = 0;
    this.colorHat = false;
  }

  changeColor() {

    if (this.colorHat === false) {

      this.colorHat = true;
      this.count++;

    } else if (this.count > 0) {
      this.colorHat = false;
      this.count--;

    }
  }
  ngOnInit(): void {
  }

}
