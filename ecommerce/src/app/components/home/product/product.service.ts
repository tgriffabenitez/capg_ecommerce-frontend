import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: any;

  constructor(private http: HttpClient) { }

  public getProducts(): any {
    return this.http.get("http://localhost:8080/publicacion");
  }

}
