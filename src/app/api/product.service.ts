// import { inject, Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
 import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

// @Injectable({ providedIn: 'root' })
// export class ProductService {
//     private readonly _http = inject(HttpClient);

//     // BehaviorSubject para almacenar los filtros
//     private filtrosSubject = new BehaviorSubject<any>({});
//     filtros$ = this.filtrosSubject.asObservable();

//     // Método para obtener todos los productos
//     getAllProducts(): Observable<any> {
//         return this._http.get('https://fakestoreapi.com/products');
//     }

//     // Método para actualizar los filtros
//     actualizarFiltros(filtros: any) {
//         this.filtrosSubject.next(filtros);
//     }

//     // Método para obtener los filtros actuales
//     getFiltrosActuales() {
//         return this.filtrosSubject.getValue();
//     }

//     // Método para obtener los productos filtrados combinando productos y filtros
//     getFilteredProducts(): Observable<any> {
//         return combineLatest([this.getAllProducts(), this.filtros$]).pipe(
//             map(([productos, filtros]) => {
//                 return productos.filter((producto: any) => {
//                     // Aplica la lógica de filtrado aquí
//                     if (filtros.categoria && producto.category !== filtros.categoria) {
//                         return false;
//                     }
//                     if (filtros.precioMin && producto.price < filtros.precioMin) {
//                         return false;
//                     }
//                     if (filtros.precioMax && producto.price > filtros.precioMax) {
//                         return false;
//                     }
//                     return true;
//                 });
//             })
//         );
//     }


    
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL de la API de Node.js
  private apiUrl = 'https://phone-finder-backend.onrender.com/api/products';


  constructor(private http: HttpClient) {
    this.cargarProductos(); // Carga inicial de productos
  }

  cargarProductos() {
    this.http.get<Product[]>(this.apiUrl).subscribe((productos) => {
      this.productsSubject.next(productos);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Obtener un producto por ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Actualizar un producto existente
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }
  // Eliminar un producto por ID
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  private filtrosSubject = new BehaviorSubject<any>({});
  filtros$ = this.filtrosSubject.asObservable();
  actualizarFiltros(filtros: any) {
    this.filtrosSubject.next(filtros);
  }

  getFilteredProducts(): Observable<Product[]> {
    return this.products$.pipe(
      map((productos) => {
        const filtros = this.filtrosSubject.getValue();
        return productos.filter((producto: any) => {
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

  getFiltrosActuales(): any {
    return this.filtrosSubject.getValue();
  }

  getUniqueCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://phone-finder-backend.onrender.com/api/products/categories');
  }
 
}

