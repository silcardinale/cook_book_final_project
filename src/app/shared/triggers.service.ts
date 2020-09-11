import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriggersService {

  public navigationPages:boolean;

  constructor() { 

    this.navigationPages = true;
  }
}
