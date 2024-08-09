import { Component, input } from '@angular/core';
import { Car } from '../../types/interface.car';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  cars = input<Car[]>([])
}
