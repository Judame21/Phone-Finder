import { Component } from '@angular/core';
import { FiltrosComponent } from "../filtros/filtros.component";
import { CelularesComponent } from "../celulares/celulares.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FiltrosComponent, CelularesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  filtros: any = {};

  onFiltroCambio(filtros: any) {
    this.filtros = filtros;
  }
}
