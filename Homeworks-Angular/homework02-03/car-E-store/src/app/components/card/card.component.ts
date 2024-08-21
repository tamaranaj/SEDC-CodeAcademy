import { Component, input } from '@angular/core';
import { Car } from '../../types/interface.car';
import { AddCarService } from '../../services/add-car.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private readonly carService: AddCarService){}
  carDetails = input<Car>({} as Car)
  handleRemoveCar(item: string){
    this.carService.removeCar(item)
  }
  handleDetails(car: Car){
    location.href = '/details'
    console.log(car)
  }
}
