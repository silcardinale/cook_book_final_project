import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public arrow: void;
  constructor(private cookbookService: CookbookService) { }

  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }

  ngOnInit(): void {
  }

}
