import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Ajusta la ruta según sea necesario
import { CelularesComponent } from './celulares/celulares.component'; // Ajusta la ruta según sea necesario
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },    
    { path: 'inicio', component: InicioComponent},
    { path: 'producto/:id', component: ProductDetailComponent }, // Ruta para detalles del producto
    
];