import { ReactiveComponent } from './component/reactive.component';
import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        ReactiveComponent
    ],
    exports: [
        ReactiveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [
        
    ],
    bootstrap: []
})

export class ReactiveModule { }