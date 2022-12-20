import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../home/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList: any = new BehaviorSubject<any>([]);

  constructor(private productService: ProductService) { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addProductToCart(product: any) {
    /**
     * verifico que el producto que se quiere agregar al carrito pertenezca
     * a la misma tienda que los productos que ya estan en el carrito
     */
    if (this.cartItemList.length > 0) {
      if (this.cartItemList[0].vendedor.tienda !== product.vendedor.tienda) {
        alert("No se puede agregar un producto de otra tienda");
        return;
      }
    }

    // verifico si el producto ya existe en el carrito
    let item = this.cartItemList.find((a: any) => a.id === product.id);

    // si no existe lo agrego al carrito
    if (!item) {
      this.cartItemList.push({ ...product, cantidad: 1, total: product.precio });

      // si existe, solo incremento la cantidad y el subtotal
    } else {
      item.cantidad += 1;
      item.total = item.cantidad * item.price;
    }

    this.productList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    // magia de stackOverflow
    return this.cartItemList.reduce((a: any, b: any) => a + (b.precio * b.cantidad), 0);
  }

  removeCartItem(product: any) {
    // si la cantidad es mayor a 1, solo decremento la cantidad y el subtotal
    if (product.cantidad > 1) {
      product.cantidad -= 1;
      product.total = product.cantidad * product.price;

      // si es igual a 1, elimino el producto del carrito
    } else {
      this.cartItemList = this.cartItemList.filter((a: any) => a.id !== product.id);
    }

    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
