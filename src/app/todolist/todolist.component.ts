import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  myTask: string[] = ["BBQ Party", "Adda with friends", "Tour plans"];
  newTask: string;

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    this.newTask = this.newTask.trim();
    if (this.newTask.length > 0) {
      this.myTask.push(this.newTask);
      console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }

  addTask() {
    this.newTask = this.newTask.trim();
    if (this.newTask.length > 0) {
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
