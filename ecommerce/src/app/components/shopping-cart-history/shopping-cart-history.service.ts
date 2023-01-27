import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartHistoryService {

  constructor(private http:HttpClient) { }


  getOrderdByCustomerId(customerId:any){
    return this.http.get('http://localhost:8080/cliente/'+ customerId+'/compras');
  }

  getOrderedProductsByOrderId(orderId:any){
    return this.http.get('http://localhost:8080/compra/'+ orderId);
  }
}
