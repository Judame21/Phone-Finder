import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, withFetch} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CelularesComponent } from './celulares/celulares.component';   

import { ProductService } from './api/product.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppComponent,
    CelularesComponent,
  ],
  providers: [
    ProductService
  ]
})
export class AppModule { 
  
}