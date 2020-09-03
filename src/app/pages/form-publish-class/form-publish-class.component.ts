import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-form-publish-class',
  templateUrl: './form-publish-class.component.html',
  styleUrls: ['./form-publish-class.component.scss']
})
export class FormPublishClassComponent implements OnInit {

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
