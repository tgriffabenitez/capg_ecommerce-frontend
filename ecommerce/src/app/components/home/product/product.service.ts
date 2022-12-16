import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): any {
    return this.http.get("http://localhost:8080/publicacion");
  }

  public getProductsByStore(storeName: string): any {
    return this.http.get("http://localhost:8080/publicacion?tienda=" + storeName);
  }

  public getProductsByCategory(categoryName: string): any {
    return this.http.get("http://localhost:8080/publicacion?categoria=" + categoryName);
  }

}
