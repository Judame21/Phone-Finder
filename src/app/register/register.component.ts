import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  admin: boolean = false; // Por defecto, no es administrador
  nombre: string = '';

  constructor(private userService: UserService) {}
  successMessage: string | null = null;
  errorMessage: string | null = null;

  register() {
    this.successMessage = null;
    this.errorMessage = null;
    
    this.userService.register(this.username, this.password, this.admin, this.nombre).subscribe(
      response => {
        this.successMessage = 'Usuario registrado exitosamente'; // Mostrar mensaje de éxito
        this.errorMessage = null; 

        this.username = '';
        this.password = '';
        this.admin = false;
        this.nombre = '';
      },
      error => {
        this.errorMessage = 'Error al registrar usuario. Intenta nuevamente.'; // Mostrar mensaje de error
        this.successMessage = null; 
        console.error('Error registering user:', error);
      }
    );
}}
