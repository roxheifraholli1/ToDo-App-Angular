import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/todos'; 

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
   
   todos:Todo[]=[];
  

   inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:"First Todo",
        completed:false
      },
      {
        content:"Second Todo",
        completed:false
      }
    ]
  }

  toggleDone(id:number){
   this.todos.map((v,i) => {
     if(i==id) v.completed = !v.completed;
      return v;
    })
  }


  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i!=id);
  
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed:false
    });

    this.inputTodo = "";
  }

}
