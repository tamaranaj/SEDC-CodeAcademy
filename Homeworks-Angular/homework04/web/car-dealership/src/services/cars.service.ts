import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { BehaviorSubject, catchError,of  } from 'rxjs';
import { ApiResponse } from '../types/api-response.interface';
import { Car } from '../types/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsURL = `${environment.apiURL}/cars`
  private _favorites = new BehaviorSubject<Car[]>([])
  $favorites = this._favorites.asObservable()
  constructor(private readonly httpService: HttpClient) { }
  getCars(){
    return this.httpService.get<ApiResponse>(this.carsURL)
    .pipe(
      catchError((error)=>{
        console.log(error)
        return of({payload: [], total: 0})
      })
    )
  }
  addFavorites(car:Car){
    const favorites = this._favorites.getValue()
    if(favorites.find(c=>c.id==car.id))return
    this._favorites.next([...favorites, car])
  }


  updateFavorites(carID: string){
    const favorites = this._favorites.getValue().filter((car)=>car.id !== carID)
    this._favorites.next([...favorites])
  }
}
