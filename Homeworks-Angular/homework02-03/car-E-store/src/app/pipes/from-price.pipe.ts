import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/interface.car';


@Pipe({
  name: 'fromPrice',
  standalone: true
})
export class FromPricePipe implements PipeTransform {

  transform(carsArray: Car[], fromPrice: string): Car[] {
    let data: Car[] = []
    if(!fromPrice || fromPrice === '0'){return carsArray}
    const filtered = carsArray.map((car)=>{
      if(car.price>=Number(fromPrice)){
        data.push(car)
      }
    })
    console.log(filtered)
    return data
  }

}
