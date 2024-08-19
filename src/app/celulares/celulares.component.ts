import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../api/product.model';
@Component({
  selector: 'app-celulares',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFilteredProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => console.error('Error al obtener productos:', error)
    });
  }
}
