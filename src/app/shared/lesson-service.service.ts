import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from"@angular/common/http";
import { Lessons } from "../models/lessons"


@Injectable({
  providedIn: 'root'
})
export class LessonServiceService {
private url = "http://localhost:3000/lesson";
public myLesson : Lessons[]
constructor (private http :HttpClient) {
 
 }

  getLessons(){
    console.log(this.url)
    return this.http.get(this.url)
    
  }

  getLesson(lesson_id:number){
   
    return this.http.get(this.url+ "/?=" + lesson_id)
  }

  addLesson(lesson:Lessons){
    return this.http.post(this.url, lesson)
    
  }

  modifyLesson(lesson:Lessons){
    return this.http.put(this.url, lesson)
    }

    removeLesson(lesson_id:number){
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{id:lesson_id}};
      return this.http.delete(this.url, httpOptions)
    }

}
