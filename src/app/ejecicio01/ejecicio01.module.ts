import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ejecicio01Component } from './ejecicio01.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [Ejecicio01Component],
  exports: [Ejecicio01Component]
})
export class Ejecicio01Module { }
