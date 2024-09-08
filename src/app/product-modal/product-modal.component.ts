import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductModalComponent {
  @Input() product: any = {}; // Asegúrate de inicializar como un objeto vacío
  @Output() save = new EventEmitter<any>(); // Emite el producto al guardar
  @Output() close = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  // Este método se usa para guardar el producto
  saveProduct() {
    if (!this.product.id) {
      // Crear un nuevo producto
      console.log('Creating new product:', this.product);
    } else {
      // Actualizar un producto existente
      console.log('Updating product:', this.product);
    }
    this.save.emit(this.product); // Emite el producto al componente padre
  }

  // Este método se usa para cerrar el modal
  closeModal() {
    this.close.emit(); // Emite un evento para cerrar el modal
  }
}
