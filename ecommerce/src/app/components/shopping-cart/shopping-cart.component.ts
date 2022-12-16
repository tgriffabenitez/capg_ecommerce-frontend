import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  public cartItemList : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res : any) => {
      this.cartItemList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

}
