import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Ajusta la ruta según sea necesario
import { CelularesComponent } from './celulares/celulares.component'; // Ajusta la ruta según sea necesario
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },    
    { path: 'inicio', component: InicioComponent},
    { path: 'producto/:id', component: ProductDetailComponent }, // Ruta para detalles del producto
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]}
    
];