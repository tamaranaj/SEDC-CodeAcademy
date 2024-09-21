import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Subscription } from 'rxjs';
import { Image } from '../../../../types/image.interface';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule, MatTableModule],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent {
  cart: Image[]
  totalPrice: number
  subscription = new Subscription
  constructor(private cartService: CartService){}
  displayedColumns: string[] = ['product', 'description', 'price', 'remove' ]

  ngOnInit(){
    this.subscription = this.cartService.$cart.subscribe((items)=>{
      this.cart = items
      this.calculateTotal()
    })
  }

  handleRemoveFromList(id:string){
    this.cartService.removeCart(id)
    this.calculateTotal()
   }

   calculateTotal(){
    let prices = this.cart.map((i)=>i.price)
    let calc = 0
    for(let price of prices){
      calc += price
    }
    this.totalPrice = calc
   }
}
