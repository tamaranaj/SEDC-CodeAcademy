import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/interface.car';

@Pipe({
  name: 'toPrice',
  standalone: true
})
export class ToPricePipe implements PipeTransform {

  transform(carsArray: Car[], toPrice: string): Car[] {
    let data: Car[] = []
    if(!toPrice || toPrice === '0'){return carsArray}
    const filtered = carsArray.map((car)=>{
      if(car.price<=Number(toPrice)){
        data.push(car)
      }
    })
    console.log(filtered)
    return data
   
  }

}
