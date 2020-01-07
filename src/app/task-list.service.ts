import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  myTask:Task [] = [];
  
  constructor() { 
    this.myTask.push({
      status: false,
      editable: false,
      description: "BBQ Party"
    });
    this.myTask.push({
      status: false,
      editable: false,
      description: "Adda with friends"
    });
    this.myTask.push({
      status: false,
      editable: false,
      description: "Tour plans"
    });
   }

  AddNewTask(aTask:Task) {
    this.myTask.push(aTask);
  }

  RemoveTask(aTask:Task) {
    let index = this.myTask.indexOf(aTask);
    this.myTask.splice(index, 1);
  }

  EditTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask[index].editable = true;
  }

  DoneEditTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask[index].editable = false;
  }
}
