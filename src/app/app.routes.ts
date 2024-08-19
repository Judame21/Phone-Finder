import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Ajusta la ruta según sea necesario
import { CelularesComponent } from './celulares/celulares.component'; // Ajusta la ruta según sea necesario

export const routes: Routes = [
    { path: '', component: CelularesComponent },
    { path: 'producto/:id', component: ProductDetailComponent }, // Ruta para detalles del producto
];