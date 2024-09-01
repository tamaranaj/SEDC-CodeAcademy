import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { DealershipInfoComponent } from './components/dealership-info/dealership-info.component';
import { Car } from './types/interface.car';
import { cars } from './components/carsArray';
import { CarComponent } from './components/car/car.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,DealershipInfoComponent, CarComponent, CreateCarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cars store';
  founded = 2024;
  description = 'Selling premium cars!'
  carsArray = signal<Car[]>(cars)
  showFrom = signal<boolean>(false)

  handleShowFrom(){
    this.showFrom.set(true)
    console.log(this.showFrom())
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1);
  }
}