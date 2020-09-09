import { Lessons } from './../../models/lessons';
import { Component, OnInit } from '@angular/core';
import { LessonServiceService } from "../../shared/lesson-service.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes-result',
  templateUrl: './classes-result.component.html',
  styleUrls: ['./classes-result.component.scss']
})

export class ClassesResultComponent implements OnInit {
  public lesson :Lessons;
  public lessons: Lessons[];
  public indice:number

  public classes /*: Lessons[]*/;
  constructor(private apiService: LessonServiceService, private router: Router) {
    
    /*this.classes =
    [
      {name:'Cookies de harina de arroz y limón', date: "15/09/2020", timetable:"18-20", dificulty:'Fácil', price:15, img:"https://www.lacocinasingluten.com/wp-content/uploads/2017/07/IMG_20170706_181334-1300x975.jpg" },
      {name:'Hoy cocinamos Sushi', date: "10/10/2020", timetable: "12.30-14", dificulty:'Diícil', price:18, img:"https://okdiario.com/img/recetas/2017/05/22/sushi-03.jpg" },
      {name:'Solomillo de cerdo con membrillo', date: "06/11/2020", timetable: "18-20", dificulty:'Moderado', price:22, img:"https://www.recetaslamasia.es/wp-content/uploads/2018/11/26.jpg" },
      {name:'Lomo al horno con limón, miel y mostaza', date: "30/09/2020", timetable: "17-18.30", dificulty:'Fácil', price: 20, img:"https://i.blogs.es/6affb9/lomo_naranja/1024_682.jpg" },
    ]*/
   }
/*
   obtainLessons(){
    this.apiService.getLessons().subscribe((data)=> {
      this.lessons = data;
      console.log(data)
      });
    }
*/

 
obtainOneLesson(lesson_id:number){
  this.apiService.getLesson(lesson_id).subscribe((data)=> {
    this.lesson = data[0];
    console.log("unaClase",data[0])
    });
}
showLesson(lesson_id){
  //this.lesson = this.lessons.filter(lesson => lesson.lesson_id === lesson_id);
  this.lesson = this.lessons[0]
  //this.apiService.myLesson = this.lesson;
  this.router.navigate(["/", "lesson"])
  
}

  getClasses(){
    return this.classes;
  }



  ngOnInit(): void {
   this.apiService.getLessons().subscribe((data:Lessons[])=> {
      return this.lessons = data;
      console.log("componentData",data)
      });
      
  }
}


