import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  public animation: boolean;
  
  constructor() { 
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



  ngOnInit(): void {
  }

}
