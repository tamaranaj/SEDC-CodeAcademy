import { Component, input, NgModule } from '@angular/core';
import { Car } from '../../types/interface.car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {
    
    carDefault ={id: Date.now().toString(),
      images: [],
      location:{
        city: 'Skopje',
        country: 'Macedonia'
      },
      
    
    } 
    car: Car = {
      ...this.carDefault

    } as Car

    cars = input<Car[]>([])
    handleAddNewCar(){    
      console.log(this.car, 'car')
      console.log(this.cars())
      this.cars().push(this.car)
      this.car = {...this.carDefault} as Car
      
    }

    
}
