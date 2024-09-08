import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Cambiado a 'styleUrls'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(public authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  updateUserName(): void {
    this.userName = this.authService.getUserName();
    this.cdr.detectChanges(); // Fuerza la detección de cambios si es necesario
  }
  ngOnInit(): void {
    this.updateUserName(); // Asegúrate de que esto se llame en ngOnInit
  }



  logout(): void {
    this.authService.logout();
    this.userName = null;
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
