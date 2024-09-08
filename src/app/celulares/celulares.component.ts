 import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
 import { ProductService } from '../api/product.service';
 import { CommonModule } from '@angular/common';
 import { RouterModule } from '@angular/router';
 import { Product } from '../api/product.model';
 import { TruncatePipe } from '../truncate.pipe';


// @Component({
//   selector: 'app-celulares',
//   standalone: true,
//   imports: [CommonModule, RouterModule, TruncatePipe],
//   templateUrl: './celulares.component.html',
//   styleUrls: ['./celulares.component.scss', '../../styles.scss']
// })
// export class CelularesComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.productService.getFilteredProducts().subscribe({
//       next: (data) => {
//         this.products = data;
//       },
//       error: (error) => console.error('Error al obtener productos:', error)
//     });
//   }
// }

import { Observable, Subscription } from 'rxjs';

@Component({
   selector: 'app-celulares',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe],
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss', '../../styles.scss']
})
export class CelularesComponent implements OnInit {
  products: Product[] = [];
  filtrosSubscription: Subscription = new Subscription();
  productosSubscription: Subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.filtrosSubscription = this.productService.filtros$.subscribe(() => {
      this.cargarProductos();
    });
    this.cargarProductos(); // Carga inicial de productos
  }
  
  cargarProductos() {
    this.productosSubscription = this.productService.getFilteredProducts().subscribe((productos) => {
      this.products = productos;
    });
  }

  ngOnDestroy() {
    this.filtrosSubscription.unsubscribe();
    this.productosSubscription.unsubscribe();
  }

}
