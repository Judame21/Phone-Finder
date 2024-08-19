import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, withFetch} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CelularesComponent } from './celulares/celulares.component';   

import { CelularesService } from './celulares/celulares.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppComponent,
    CelularesComponent
  ],
  providers: [
    CelularesService
  ]
})
export class AppModule { }