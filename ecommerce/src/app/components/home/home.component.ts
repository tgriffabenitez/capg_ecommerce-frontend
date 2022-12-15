import { Component } from '@angular/core';
import { ProductService } from './product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  public getStoreProducts(storeName: string): void {
    this.productService.getProducsByStore(storeName).subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

}

