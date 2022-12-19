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
      // total de productos en el carrito
      this.totalCartItem = data.reduce((a : any, b : any) => a + (b.cantidad), 0);
    });
  }

  public closeSession() {
    localStorage.clear();
    window.location.reload();
  }

}
