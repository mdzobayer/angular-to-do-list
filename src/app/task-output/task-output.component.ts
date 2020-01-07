import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-output',
  templateUrl: './task-output.component.html',
  styleUrls: ['./task-output.component.css']
})
export class TaskOutputComponent implements OnInit {

  constructor(public taskList:TaskListService) { }

  ngOnInit() {
  }

  removeTask(aTask) {
    this.taskList.RemoveTask(aTask);
  }

  editTask(aTask) {
    this.taskList.EditTask(aTask);
  }

  doneEditTask(aTask) {
    this.taskList.DoneEditTask(aTask);
  }

}
