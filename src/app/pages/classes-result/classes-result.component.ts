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
  public lesson :Lessons [];
  public lessons: Lessons[];
 
  constructor(private apiService: LessonServiceService, private router: Router) { }

   obtainLessons(){
    this.apiService.getLessons().subscribe((data:Lessons[])=> {
      return this.lessons = data;
      });      
  }
    


showLesson(lesson_id){
  this.lesson = this.lessons.filter(lesson => lesson.lesson_id === lesson_id);
  this.apiService.lesson = this.lesson;
  console.log("showLesson", this.lesson)
  this.router.navigate(["/", "lesson"])
}



  ngOnInit(): void {
   this.obtainLessons()
  }
}


