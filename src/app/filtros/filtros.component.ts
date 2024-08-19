import { Component } from '@angular/core';
import { ProductService } from '../api/product.service';

@Component({
  selector: 'app-filtros',
  standalone: true,
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent {
  constructor(private productService: ProductService) {}

  onCategoriaChange(event: any) {
    const categoria = event.target.value;
    const filtrosActuales = this.productService.getFiltrosActuales();
    this.productService.actualizarFiltros({ ...filtrosActuales, categoria });
  }

  onPrecioMinChange(event: any) {
    const precioMin = event.target.value;
    const filtrosActuales = this.productService.getFiltrosActuales();
    this.productService.actualizarFiltros({ ...filtrosActuales, precioMin });
  }

  onPrecioMaxChange(event: any) {
    const precioMax = event.target.value;
    const filtrosActuales = this.productService.getFiltrosActuales();
    this.productService.actualizarFiltros({ ...filtrosActuales, precioMax });
  }

  limpiarFiltros() {
    this.productService.actualizarFiltros({});
  }
}
