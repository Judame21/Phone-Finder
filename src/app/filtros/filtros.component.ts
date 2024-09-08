import { Component, Output, EventEmitter } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from '../api/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filtros',
  standalone: true,
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  imports: [FontAwesomeModule, CommonModule]
})
export class FiltrosComponent {
  faDollarSign = faDollarSign;
  @Output() filtroCambio = new EventEmitter<any>();
  categorias: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("prueba")
    this.productService.getUniqueCategories().subscribe(categories => {
      this.categorias = categories;
      console.log(this.categorias)
    });
  }
  onCategoriaChange(event: any) {
    const categoria = event.target.value;
    this.productService.actualizarFiltros({ ...this.productService.getFiltrosActuales(), categoria });
  }

  onPrecioMinChange(event: any) {
    const precioMin = event.target.value;
    this.productService.actualizarFiltros({ ...this.productService.getFiltrosActuales(), precioMin });
  }

  onPrecioMaxChange(event: any) {
    const precioMax = event.target.value;
    this.productService.actualizarFiltros({ ...this.productService.getFiltrosActuales(), precioMax });
  }

  limpiarFiltros() {
    this.productService.actualizarFiltros({});
  }


  
}
