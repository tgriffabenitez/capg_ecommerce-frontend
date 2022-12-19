import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { CartService } from '../shopping-cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService:CheckoutService, private cartService:CartService, private router:Router) { }

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

    // valido que el usuario este logueado
    if (this.clienteId == null) {
      alert("Debe iniciar sesión para poder realizar la compra.");
      this.router.navigate(['login']);
      return;
    }

    // verifico que al menos haya una publicacion en el carrito
    this.publicaciones = this.cartService.cartItemList;
    if (this.publicaciones.length == 0) {
      alert("No hay publicaciones en el carrito. Agregue publicaciones para poder realizar la compra.");
      this.router.navigate(['']);
      return;
    }

    // guardo el id y la cantidad de cada publicacion en un array
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
      telefono: this.telefono,
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
    this.checkoutService.postCheckout(datos).subscribe((resp: any) => {
      console.log(resp);

    }, (err: any) => {
      console.log(err);
      if (err.status == 201) {
        this.cartService.removeAllCart();
        alert("Compra realizada con éxito!");
        this.router.navigate(['order-details']);

      } else if (err.status == 500) {
        alert("Verifique los datos ingresados");
      }

    });

  } // fin onSubmitForm

} // fin clase CheckoutComponent
