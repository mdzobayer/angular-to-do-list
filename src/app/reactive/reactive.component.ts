import { FormBuilder } from '@angular/forms';
import { Task } from './../Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myTask:Task[] = [];
  editable:boolean;

  taskForm = this.fb.group({
    description: [''],
    id: ['']
  });


  
  constructor(private fb: FormBuilder) { 
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
    this.editable = false;
  }

  ngOnInit() {
  }
  
  AddReactiveTask() {
    
    //console.log("Before Push");
    this.myTask.push({
      status: false,
      editable: false,
      description: this.taskForm.value.description
    });
    //console.log("After Push");
    console.log(this.myTask);
    this.taskForm.value.description = "";
  }

  RemoveTask(aTask:Task) {
    let index = this.myTask.indexOf(aTask);
    this.myTask.splice(index, 1);
  }

  EditTask(aTask) {
    let index = this.myTask.indexOf(aTask);
    //this.myTask[index].editable = true;
    this.editable = true;
    this.taskForm.value.description = aTask.description;
    this.taskForm.value.id = index;
  }

  DoneEditTask() {
    let index = this.taskForm.value.id;
    this.myTask[index].description = this.taskForm.value.description;
    this.taskForm.value.description = "";
    this.taskForm.value.id = null;
    this.editable = false;
  }
}
