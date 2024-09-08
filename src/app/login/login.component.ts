// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }
  
  login(): void {
    this.http.post<{ token: string }>('http://localhost:3000/api/users/login', { username: this.username, password: this.password })
      .subscribe(response => {
        console.log('Received Token:', response.token); // Imprime el token recibido del backend
        this.authService.setToken(response.token);
        this.updateUserName(); // Actualiza el nombre del usuario después de iniciar sesión
        this.router.navigate(['/']); // Redirige a la página principal o a una página protegida
      }, error => {
        console.error('Error logging in:', error);
      });
  }
  

  updateUserName(): void {
    this.authService.getUserName(); // Asegúrate de actualizar el nombre del usuario si es necesario
  }
}
