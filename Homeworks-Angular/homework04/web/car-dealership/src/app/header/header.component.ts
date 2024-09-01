import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent,MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
