import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    private apiUrl = 'http://localhost:3000/api/users';

    constructor(private http: HttpClient, private authService: AuthService) {}

    // Método para registrar un nuevo usuario
    register(username: string, password: string, admin: boolean, nombre: string): Observable<any> {
      const user = { username, password, admin, nombre };
      return this.http.post(`${this.apiUrl}/register`, user);
    }
  
    // Método para iniciar sesión
    login(username: string, password: string): Observable<any> {
      const credentials = { username, password };
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }

    getUserInfo() {
        const token = this.authService.getToken();
        return this.http.get('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
    }
}