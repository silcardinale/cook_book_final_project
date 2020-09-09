import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Lessons } from './../../models/lessons';
import { LessonServiceService } from "../../shared/lesson-service.service"
import { Router } from '@angular/router';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public arrow: void;
  public lesson = Lessons;
  
  public lessons ;
  


  constructor(private cookbookService: CookbookService,private apiService: LessonServiceService, private router: Router)
   { 
    this.lesson
  }

  showLesson(i){
    this.lesson = this.lessons.filter(lesson => lesson.lesson_id === i);
    //this.apiService.myLesson = this.lesson;
    this.router.navigate(["/", "lesson",i])
  }

  obtainOneLesson(lesson_id:number){
    this.apiService.getLesson(lesson_id).subscribe((data)=> {
      this.lesson = data[0];
      console.log("unaClase",data[0])
      });
  }

 

  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }

 
  ngOnInit(): void {
    
  
  }

}
