import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-publish-recipes',
  templateUrl: './form-publish-recipes.component.html',
  styleUrls: ['./form-publish-recipes.component.scss']
})
export class FormPublishRecipesComponent implements OnInit {
  public animation: boolean;
  public form: NgForm;

  constructor() {

    this.animation = false;
    this.form;
  }

  show() {

    if (document.getElementById('sucess').style.visibility === 'visible') {
      this.animation = false;

      document.getElementById('sucess').style.visibility = 'hidden';
    } else {
      document.getElementById('sucess').style.visibility = 'visible';
      this.animation = true;
    }

  }


  ngOnInit(): void {
  }



}
