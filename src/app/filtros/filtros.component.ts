import { Component } from '@angular/core';
import { ProductService } from '../api/product.service';


import {faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-filtros',
  standalone: true,
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  imports: [FontAwesomeModule]
})
export class FiltrosComponent {
  constructor(private productService: ProductService) {

  }
  faDollarSign = faDollarSign;
  
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
