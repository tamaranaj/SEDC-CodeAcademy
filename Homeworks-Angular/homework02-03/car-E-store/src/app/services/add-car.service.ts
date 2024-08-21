import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cars } from '../data/carsArray';
import { Car } from '../types/interface.car';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {
  private _cars = new BehaviorSubject(cars)
  cars$ = this._cars.asObservable()
  constructor() { }
  addCar(newCar: Car){
    const cars = this._cars.value
    this._cars.next([...cars, newCar])
  }

  removeCar(carID: string){
    const carsValues = this._cars.value.filter(item=>item.id!==carID)
    console.log(carsValues)
    this._cars.next([...carsValues])
  }
}
