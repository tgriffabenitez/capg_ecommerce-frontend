import { Component } from '@angular/core';
import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalCartItem : number = 0;

  constructor(private cartService : CartService) {}

  ngOnInit() : void {
    this.cartService.getProducts().subscribe((data : any) => {
      this.totalCartItem = data.length;
    });
  }



}
