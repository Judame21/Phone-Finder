import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  admin: boolean = false; // Por defecto, no es administrador
  nombre: string = '';

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.username, this.password, this.admin, this.nombre).subscribe(response => {
      console.log('User registered:', response);
      // Puedes redirigir al usuario o mostrar un mensaje de éxito
    }, error => {
      console.error('Error registering user:', error);
    });
  }
}
