import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  newTask: string;

  constructor(public taskList:TaskListService) { }

  ngOnInit() {
  }

  onKeyUp() {
    this.newTask = this.newTask.trim();
    if (this.newTask.length > 0) {
      this.taskList.AddNewTask({
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
      this.taskList.AddNewTask({
        status: false,
        editable: false,
        description: this.newTask});
      
        console.log("New Task is: " + this.newTask);
    }
    this.newTask = "";
  }
}
