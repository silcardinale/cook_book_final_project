import { TriggersService } from './../../shared/triggers.service';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  public animation: boolean;
  public test: boolean;

  @Output() navigation = new EventEmitter()

  
  constructor(private activatedRoute: ActivatedRoute, public apiNavigation: TriggersService) { 
    this.animation = false;

  }

  login() {
   return false


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
  }

}
