import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
constructor( private favoritesService: FavoritesService){}
ngOnInit(){
  let fave = this.favoritesService.favoritesLength()
  console.log(fave)
}
}
