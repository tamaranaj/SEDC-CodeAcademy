import { Component } from '@angular/core';
import { Car } from '../../types/car.interface';
import { CarsService } from '../../services/cars.service';
import {MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatTableModule, MatButton],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites: Car[]
  displayedColumns: string[] = ['Brand', 'Model', 'Year', 'Price', 'Location','Remove'];
 constructor(private readonly carService: CarsService){}

 ngOnInit(){
  this.carService.$favorites.subscribe(
   (data)=>{this.favorites = data; console.log(data)}
  )
 }

 handleRemoveFromList(car:Car){
  this.carService.updateFavorites(car.id)
 }
}
