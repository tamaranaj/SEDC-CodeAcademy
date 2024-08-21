import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/interface.car';


@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  
  transform(carsArray: Car[], searchValue: string): Car[]{
      let data: Car[] = []
      if(!searchValue) return carsArray

      const filtered = carsArray.map((car)=>{
        if(car.brand.toLowerCase().includes(searchValue.toLowerCase().trim())){
            data.push(car)
        }
        
      })
      return data
  }
 

}
