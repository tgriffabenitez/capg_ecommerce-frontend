import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../home/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList : any = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product : any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addProductToCart(product : any) {

    // verifico si el producto ya existe en el carrito
    let item = this.cartItemList.find((a : any) => a.id === product.id);

    // si no existe lo agrego al carrito
    if(!item) {
      this.cartItemList.push({...product, cantidad: 1, total: product.precio});

    // si existe, solo incremento la cantidad
    } else {
      item.cantidad += 1;
      item.total = item.cantidad * item.price;
    }

    this.productList.next(this.cartItemList);
  }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a : any) => {
      grandTotal += a.total;
    })

    return grandTotal;
  }

  removeCartItem(product : any) {
    this.cartItemList.map((a : any, index : any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
