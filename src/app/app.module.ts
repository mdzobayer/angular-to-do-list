import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponent } from './reactive/reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
