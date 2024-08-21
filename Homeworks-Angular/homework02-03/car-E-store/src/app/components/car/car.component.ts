import { Component, input, Signal, signal, WritableSignal } from '@angular/core';
import { Car } from '../../types/interface.car';
import { CardComponent } from '../card/card.component';
import { AddCarService } from '../../services/add-car.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { ToPricePipe } from '../../pipes/to-price.pipe';
import { FromPricePipe } from '../../pipes/from-price.pipe';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CardComponent, SearchPipe, ToPricePipe,FromPricePipe],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  fromPrice=signal("")
  toPrice = signal("")
  searchedCar = signal("")
  test = {
    fromPrice:this.fromPrice,
    searchValue: this.searchedCar,
    toPrice:this.toPrice
  }
  constructor(private readonly carService: AddCarService){}
  carsArray = signal<Car[]>([])
  ngOnInit(){
    this.carService.cars$.subscribe((data)=>{
      this.carsArray.set(data)
    })
  }
  handleInputChange(event: Event){
    const target = event.target as HTMLInputElement
    const search = target.value

    this.searchedCar.set(search)
    console.log(search)
  }

  handleFromPrice(event:Event, property: WritableSignal<string>){
    const target = event.target as HTMLInputElement
    const price = target.value
    console.log(price)
    property.set(price)
  }
}
