import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CelularesComponent } from "./celulares/celulares.component";
import { ProductService } from './api/product.service';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from "./filtros/filtros.component";


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CelularesComponent, CommonModule, FiltrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Phone-Finder';

  private readonly productSvc = inject(ProductService);
  products$ = this.productSvc.getAllProducts();
}

