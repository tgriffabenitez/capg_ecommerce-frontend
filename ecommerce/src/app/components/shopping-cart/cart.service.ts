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
    // magia de stackOverflow
    return this.cartItemList.reduce((a : any, b : any) => a + (b.precio * b.cantidad), 0);
  }

  removeCartItem(product : any) {
    // verifico si la cantidad es mayor a 1
    // si es mayor a 1, decremento la cantidad
    if(product.cantidad > 1) {
      product.cantidad -= 1;
      product.total = product.cantidad * product.price;

    // si es igual a 1, elimino el producto del carrito
    } else {
      this.cartItemList = this.cartItemList.filter((a : any) => a.id !== product.id);
    }

    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
