import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { CartService } from '../shopping-cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private checkoutService : CheckoutService, private cartService : CartService) { }

  public nombre : string | undefined;
  public apellido : string | undefined;
  public email : string | undefined;
  public telefono : string | undefined;
  public direccionCalle : string | undefined;
  public direccionNumero: string | undefined;
  public direccionPiso: string | undefined;
  public direccionDepto: string | undefined;
  public metodoDePago: string | undefined;
  public publicaciones: any = [];

  public nombreTarjeta: string | undefined;
  public numeroTarjeta: string | undefined;
  public codigoSeguridad: string | undefined;
  public fechaVencimiento: string | undefined;




  ngOnInit(): void { }

  public getCartItems() {
    return this.cartService.cartItemList;
  }


  public onSubmitForm(data: any) {

    this.publicaciones = this.cartService.cartItemList;

    console.log(data);

    this.checkoutService.onSendForm(data).subscribe((res : any) => {
      console.log(res);
    });

  }

}
