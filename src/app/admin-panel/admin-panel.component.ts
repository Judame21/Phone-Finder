import { Component } from '@angular/core';
import { CelularesComponent } from "../celulares/celulares.component";
import { CelularesAdminComponent } from "../celulares-admin/celulares-admin.component"; 

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CelularesComponent, CelularesAdminComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {

}
