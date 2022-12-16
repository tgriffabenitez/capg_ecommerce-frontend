import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  public productList : any = [];
  public grandTotal : number = 0;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data : any) => {
      this.productList = data;
      this.grandTotal = this.cartService.getTotalPrice();
    });



  }

}
