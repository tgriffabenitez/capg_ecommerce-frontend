import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }

  public postCheckout(data: any) {
    // envio los datos del formulario al backend
    console.log(data);
    return this.http.post('http://localhost:8080/carrito', data);
  }

  public metodosDePagoDelVendedor(vendedorId: number) {
    return this.http.get('http://localhost:8080/vendedores/'+ vendedorId +'/metodos-de-pago/' );
  }
}
