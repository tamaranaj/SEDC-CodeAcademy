import { Component, input } from '@angular/core';
import { Car } from '../../types/interface.car';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  carDetails = input<Car>({} as Car)
}
