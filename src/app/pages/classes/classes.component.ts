import { Component, OnInit } from '@angular/core';
import { CookbookService } from 'src/app/shared/cookbook.service';
import { Lessons } from './../../models/lessons';
import { LessonServiceService } from "../../shared/lesson-service.service"
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';




@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public arrow: void;
  public lesson: Lessons[];
  public lessonTeacher: Lessons;
  public teacher: User

  constructor(private cookbookService: CookbookService,private apiService: LessonServiceService, private userService: UserService)
   { 
    this.lesson
    this.teacher 
  }

/*
  obtainOneLesson(){
    this.apiService.getLesson().subscribe((data)=> {
      this.lesson = data[0];
      console.log("unaClase",data[0])
      });
  }*/

  showLesson(){
    this.lesson = this.apiService.lesson
  }


  goBack(){
    this.arrow = this.cookbookService.backClicked()
  }
/*
  profileTeacher(lesson_id){

    this.teacher = this.userService.getLessonfromUser(this.lessonTeacher.lesson_id).subscribe((data)=> {
      this.teacher = data;
      console.log("teacher",data)
      });
  }
  */

 
  ngOnInit(): void {
    this.showLesson()
    
  }

}
