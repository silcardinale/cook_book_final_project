import { Lessons } from './../../models/lessons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-result',
  templateUrl: './classes-result.component.html',
  styleUrls: ['./classes-result.component.scss']
})
export class ClassesResultComponent implements OnInit {
  public classes: Lessons[];
  constructor() {
    this.classes =
    [
      {name:'Cookies de harina de arroz y limón', date: "15/09/2020", timetable:"18-20", dificulty:'Fácil', price:15, img:"https://www.lacocinasingluten.com/wp-content/uploads/2017/07/IMG_20170706_181334-1300x975.jpg" },
      {name:'Hoy cocinamos Sushi', date: "10/10/2020", timetable: "12.30-14", dificulty:'Diícil', price:18, img:"https://okdiario.com/img/recetas/2017/05/22/sushi-03.jpg" },
      {name:'Solomillo de cerdo con membrillo', date: "06/11/2020", timetable: "18-20", dificulty:'Moderado', price:22, img:"https://www.recetaslamasia.es/wp-content/uploads/2018/11/26.jpg" },
      {name:'Lomo al horno con limón, miel y mostaza', date: "30/09/2020", timetable: "17-18.30", dificulty:'Fácil', price: 20, img:"https://i.blogs.es/6affb9/lomo_naranja/1024_682.jpg" },
    ]
   }
  getClasses(){
    return this.classes;
  }
  ngOnInit(): void {
  }
}