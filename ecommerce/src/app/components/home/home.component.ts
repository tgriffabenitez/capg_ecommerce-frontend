import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

import { Category } from './category';
import { Store } from './store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products!: any;
  lstCategories: Category[] = [];
  lstStores: Store[] = [];

  public selectedCategory!: Number;
  public selectedStore!: Number;
  productService: any;

  constructor(private http: HttpClient, productService: ProductService) { }


  ngOnInit(): void {
    this.http.get("http://localhost:8080/publicacion").subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });

    this.productService.getPublicaciones().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });

  }









}
