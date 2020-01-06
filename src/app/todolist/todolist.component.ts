import { Component, OnInit } from '@angular/core';

class Task {
  status:boolean; editable:boolean; description:string;
  constructor(status:boolean, editable:boolean, description:string) {
    this.status = status;
    this.editable = editable;
    this.description = description;
  }
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  myTask: Task[] = [];
  newTask: string;

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

  ngOnInit() {
  }

  onKeyUp() {
    this.newTask = this.newTask.trim();
    if (this.newTask.length > 0) {
      this.myTask.push({
        status: false,
        editable: false,
        description: this.newTask});
      console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }

  addTask() {
    this.newTask = this.newTask.trim();
    if (this.newTask.length > 0) {
      this.myTask.push({
        status: false,
        editable: false,
        description: this.newTask});
      console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }
  removeTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask.splice(index, 1);
  }

  editTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask[index].editable = true;
  }

  doneEditTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask[index].editable = false;
  }

}
