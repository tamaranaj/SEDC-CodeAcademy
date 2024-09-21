import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent,MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  productInCart= computed(()=>{return this.cartService.cartLength()})

  productInFavorites = computed(()=> {return this.favoriteService.favoritesLength()})
  
  constructor(private cartService: CartService, private favoriteService: FavoritesService){}

  
}
