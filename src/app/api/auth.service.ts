import { Injectable } from '@angular/core';
import { jwtDecode }  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor() { }

  // Guardar el token en el localStorage
  public setToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
  
  public getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }
  
  public removeToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
  
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
  
  isAdmin(): boolean {
    const token = this.getToken(); // Obtener el token JWT
    if (token) {
      const decodedToken: any = jwtDecode(token);
      console.log('Decoded Token:', decodedToken)
      return decodedToken.admin === true; // Comprobar si es admin
    }
    return false;
  }



  public getUserName(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        console.log(decoded.nombre)
        return decoded.nombre || null; // Asegúrate de que 'nombre' es la propiedad correcta del JWT
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  
  public login(token: string): void {
    this.setToken(token);
  }
  
  public logout(): void {
    this.removeToken();
  }
}
