import { Component, signal } from '@angular/core';
import { DealershipInfoComponent } from '../dealership-info/dealership-info.component';
import { CarComponent } from '../car/car.component';
import { CreateCarComponent } from '../create-car/create-car.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DealershipInfoComponent,CarComponent,CreateCarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Cars store';
  founded = 2024;
  description = 'Selling premium cars!'

}
