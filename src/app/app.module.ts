import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskOutputComponent } from './task-output/task-output.component'
import { TaskListService } from './task-list.service';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TaskInputComponent,
    TaskOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    TaskListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
