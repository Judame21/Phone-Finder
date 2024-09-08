// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }
  
  login(): void {
    this.errorMessage = null;
    this.http.post<{ token: string }>('https://phone-finder-backend.onrender.com/api/users/login', { username: this.username, password: this.password })
      .subscribe(response => {
        this.authService.setToken(response.token);
        this.updateUserName();
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });


      }, error => {
        this.errorMessage = 'Usuario o Contraseña Incorrectos, Intente nuevamente.';
        console.error('Error logging in:', error);
      });
  }
  

  updateUserName(): void {
    this.authService.getUserName(); 
  }
}
