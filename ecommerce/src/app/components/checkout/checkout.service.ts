import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }

  public onSendForm(data: any) {
    return this.http.post('http://localhost:8080/carrito', data);
  }



}
