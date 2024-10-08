import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CelularesComponent } from "./celulares/celulares.component";
import { ProductService } from './api/product.service';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from "./filtros/filtros.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from './register/register.component';


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CelularesComponent, CommonModule, FiltrosComponent, ProductDetailComponent, FooterComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Phone-Finder';

  private readonly productSvc = inject(ProductService);
  products$ = this.productSvc.getProducts();
}

