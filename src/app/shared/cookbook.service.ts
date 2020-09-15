import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

import {Location} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  public test: boolean;
  
  constructor(private location: Location) {
   
  }

  backClicked() {
    this.location.back();
  }
}
  






