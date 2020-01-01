import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  myTask: string[] = ["Task1", "Task2", "Task3"];
  newTask: string;

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {

    if (this.newTask !== "") {
      this.myTask.push(this.newTask);
      console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }

  addTask() {
    if (this.newTask !== "") {
      this.myTask.push(this.newTask);
      console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }
  removeTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    this.myTask.splice(index, 1);
  }

}
