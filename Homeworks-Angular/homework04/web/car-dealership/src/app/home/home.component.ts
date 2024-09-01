import { Component, input, signal } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { map, Observable, tap } from 'rxjs';
import { Car } from '../../types/car.interface';
import { CarsComponent } from '../cars/cars.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarsComponent,MatProgressSpinnerModule, AsyncPipe,MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  cars= new Observable<Car[]>()
  constructor(private carsService: CarsService  ){}

  getCars(){
   this.cars =this.carsService.getCars().pipe(
    map(data=>data.payload)
   )
   
  }
  ngOnInit(){
    this.getCars()
    
  }
 

}
