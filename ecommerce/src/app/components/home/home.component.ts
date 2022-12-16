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
      console.log(this.products);
    });
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  public getProductsByStore(storeName: string): void {
    this.productService.getProductsByStore(storeName).subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  public getProductsByCategory(categoryName: string): void {
    this.productService.getProductsByCategory(categoryName).subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  addProductToCart(product: any) {
    this.cartService.addProductToCart(product);
    console.log(this.cartService.cartItemList);
  }

}

