import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../api/product.model';
import { TruncatePipe } from '../truncate.pipe';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-celulares-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe, ProductModalComponent],
  templateUrl: './celulares-admin.component.html',
  styleUrl: './celulares-admin.component.scss'
})
export class CelularesAdminComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }


  openEditProductModal(product: any) {
    this.selectedProduct = { ...product };
    this.showModal = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.loadProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }


  showModal = false;
  selectedProduct: any = {}; // Inicializa como un objeto vacío

  openCreateProductModal() {
    this.selectedProduct = {}; // Asegúrate de que `selectedProduct` sea un objeto vacío
    this.showModal = true;
  }

  handleSave(updatedProduct: any) {
    if (updatedProduct.id) {
      // Actualizar producto existente
      this.productService.updateProduct(updatedProduct).subscribe(
        () => {
          this.loadProducts();
          this.showModal = false;
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      // Crear nuevo producto
      this.productService.createProduct(updatedProduct).subscribe(
        () => {
          this.loadProducts();
          this.showModal = false;
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }
}