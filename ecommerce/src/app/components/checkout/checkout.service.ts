import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }

  public postCheckout(data: any) {
    // envio los datos del formulario al backend
    return this.http.post('http://localhost:8080/carrito', data);
  }



}
