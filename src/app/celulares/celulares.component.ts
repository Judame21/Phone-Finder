import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celulares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {
  products: any[] = [];

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
