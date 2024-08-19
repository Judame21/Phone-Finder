import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ProductService {
    private readonly _http = inject(HttpClient);

    // BehaviorSubject para almacenar los filtros
    private filtrosSubject = new BehaviorSubject<any>({});
    filtros$ = this.filtrosSubject.asObservable();

    // Método para obtener todos los productos
    getAllProducts(): Observable<any> {
        return this._http.get('https://fakestoreapi.com/products');
    }

    // Método para actualizar los filtros
    actualizarFiltros(filtros: any) {
        this.filtrosSubject.next(filtros);
    }

    // Método para obtener los filtros actuales
    getFiltrosActuales() {
        return this.filtrosSubject.getValue();
    }

    // Método para obtener los productos filtrados combinando productos y filtros
    getFilteredProducts(): Observable<any> {
        return combineLatest([this.getAllProducts(), this.filtros$]).pipe(
            map(([productos, filtros]) => {
                return productos.filter((producto: any) => {
                    // Aplica la lógica de filtrado aquí
                    if (filtros.categoria && producto.category !== filtros.categoria) {
                        return false;
                    }
                    if (filtros.precioMin && producto.price < filtros.precioMin) {
                        return false;
                    }
                    if (filtros.precioMax && producto.price > filtros.precioMax) {
                        return false;
                    }
                    return true;
                });
            })
        );
    }

    getProductById(id: string): Observable<any> {
        return this._http.get(`https://fakestoreapi.com/products/${id}`);
    }
    
}
