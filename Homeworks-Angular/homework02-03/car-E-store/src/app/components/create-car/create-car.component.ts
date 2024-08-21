import { Component, input, NgModule, output, signal } from '@angular/core';
import { Car } from '../../types/interface.car';
import { FormsModule } from '@angular/forms';
import { AddCarService } from '../../services/add-car.service';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {
  constructor(private readonly carService: AddCarService){}
    possibleBrands = ['Opel','Porshe', 'Honda', 'Fiat', 'BMW','Mercedes','Abarth','Audi', 'Mazda', 'Nissan','Ford','Cadillac', 'Hyundai', 'Dodge', 'Toyota', 'Mitsubishi', 'Subaru', 'Suzuki']
    possibleCarTypes = ['Sedan', "SUV", 'Coupe', 'Hatchback', 'Convertible','Truck']
    possibleFuelTypes = ['Petrol', 'Diesel', 'Electric']
    isCreated = signal<boolean>(false)
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

    
    handleAddNewCar(){    
      
      this.carService.addCar(this.car)
      this.isCreated.set(true)
      this.car = {...this.carDefault} as Car
         
      
    }
   
}
