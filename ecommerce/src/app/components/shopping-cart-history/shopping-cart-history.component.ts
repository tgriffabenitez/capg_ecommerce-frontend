import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shopping-cart/cart.service';
import { ShoppingCartHistoryService } from './shopping-cart-history.service';

@Component({
  selector: 'app-shopping-cart-history',
  templateUrl: './shopping-cart-history.component.html',
  styleUrls: ['./shopping-cart-history.component.css']
})
export class ShoppingCartHistoryComponent implements OnInit{

  public orders : any = [];
  public orderProducts : any = [];
  public customerId = localStorage.getItem('clienteId');

  constructor(private shoppingCartHistoryService:ShoppingCartHistoryService) { }


  ngOnInit(): void {

    // obtengo todas las compras del cliente
    this.shoppingCartHistoryService.getOrderdByCustomerId(this.customerId).subscribe((data:any) => {
      this.orders = data;
      console.log(this.orders);

      // obtengo los productos de cada compra
      this.orders.forEach((order:any) => {
        this.shoppingCartHistoryService.getOrderedProductsByOrderId(order.id).subscribe((data:any) => {
          this.orderProducts = data;
          console.log(this.orderProducts);
        });
      });
    });
  }
}
