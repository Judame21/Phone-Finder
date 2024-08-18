import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from './celular.model';

@Injectable({
  providedIn: 'root'
})


export class CelularesService {
    
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.techspecs.io';

  getProducts(): Observable<Celular[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<Celular[]>(this.apiUrl, { headers });
  }
}