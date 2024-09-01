import { Component, input, signal } from '@angular/core';
import { Car } from '../../types/car.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, CurrencyPipe, MatIconModule,MatDividerModule, MatExpansionModule,MatChipsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  constructor(private readonly carService: CarsService){}
  car=input.required<Car>()
  readonly panelOpenState = signal(false); 

  handleAccordion(value:boolean){
    this.panelOpenState.set(value)
  }
  handleAddFavorites(car:Car){
    this.carService.addFavorites(car)
  }
}

