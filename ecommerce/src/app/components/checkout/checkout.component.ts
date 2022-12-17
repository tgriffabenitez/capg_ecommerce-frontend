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

  public clienteId = localStorage.getItem("clienteId");
  public nombre : string | undefined;
  public apellido : string | undefined;
  public email : string | undefined;
  public telefono : string | undefined;
  public direccionCalle : string | undefined;
  public direccionNumero: string | undefined;
  public direccionPiso: string | undefined;
  public direccionDepto: string | undefined;
  public metodoDePago: string = "DEBITO_VISA";
  public publicaciones: any = [];
  public publicacionesIdCantidad : any = [];

  public nombreTarjeta: string | undefined;
  public numeroTarjeta: string | undefined;
  public codigoSeguridad: string | undefined;
  public fechaVencimiento: string | undefined;

  public categoriaId : number = 0;
  public cantidadPublicaciones : number = 0;





  ngOnInit(): void { }

  public onSubmitForm(data: any) {

    // guardo el id y la cantidad de cada publicacion en un array
    this.publicaciones = this.cartService.cartItemList;
    this.publicaciones.forEach((publicacion: any) => {
      this.publicacionesIdCantidad.push({publicacionId: publicacion.id, cantidad: publicacion.cantidad});
    });


    console.log(this.publicacionesIdCantidad);

    // guardo los datos del formulario en un objeto
    let datos = {
      clienteId: this.clienteId,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      "telefono": "1136600226",
      direccionCalle: this.direccionCalle,
      direccionNumero: this.direccionNumero,
      direccionPiso: this.direccionPiso,
      direccionDepto: this.direccionDepto,
      metodoDePago: this.metodoDePago,
      publicaciones: this.publicacionesIdCantidad,
      nombreTarjeta: this.nombreTarjeta,
      numeroTarjeta: this.numeroTarjeta,
      codigoSeguridad: this.codigoSeguridad,
      fechaVencimiento: this.fechaVencimiento,
    }

    console.log(datos);

    // envio los datos al servicio
    this.checkoutService.postCheckout(datos).subscribe((data: any) => {
      console.log(data);
    });

  }
}
