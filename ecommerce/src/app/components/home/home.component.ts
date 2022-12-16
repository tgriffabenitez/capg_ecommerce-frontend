import { Component } from '@angular/core';
import { CartService } from '../shopping-cart/cart.service';
import { ProductService } from './product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products: any;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data;

      this.products.forEach((element : any) => {
        Object.assign(element, {cantidad: 1, total: element.precio});

      });

    });
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  public getProductsByStore(storeName: string): void {
    this.productService.getProductsByStore(storeName).subscribe((data: any) => {
      this.products = data;
    });
  }

  public getProductsByCategory(categoryName: string): void {
    this.productService.getProductsByCategory(categoryName).subscribe((data: any) => {
      this.products = data;
    });
  }

  addProductToCart(product: any) {
    this.cartService.addProductToCart(product);
    console.log(this.cartService.cartItemList);
  }

}

