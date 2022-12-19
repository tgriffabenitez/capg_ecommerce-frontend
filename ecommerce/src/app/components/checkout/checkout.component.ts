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

  // datos que envio al backend
  public clienteId = localStorage.getItem("clienteId");
  public formaDePago: number | undefined;
  public publicaciones: any = [];

  // array que contiene el id de cada publicacion y la cantidad de publicaciones
  public publicacionesIdCantidad : any = [];

  // datos del vendedor
  public seleccionPago: any = [];

  // datos de relleno. No los voy a implementar. Servirian
  // en caso que quiera que el usuario se registre en mi pagina
  public nombre : string | undefined;
  public apellido : string | undefined;
  public email : string | undefined;
  public telefono : string | undefined;
  public direccionCalle : string | undefined;
  public direccionNumero: string | undefined;
  public direccionPiso: string | undefined;
  public direccionDepto: string | undefined;
  public nombreTarjeta: string | undefined;
  public numeroTarjeta: string | undefined;
  public codigoSeguridad: string | undefined;
  public fechaVencimiento: string | undefined;

  ngOnInit(): void {

    this.publicaciones = this.cartService.cartItemList;
    // valido que el usuario este logueado
    if (this.clienteId == null) {
      alert("Debe iniciar sesión para poder realizar la compra.");
      this.router.navigate(['login']);
      return;
    }

    // verifico que al menos haya una publicacion en el carrito
    if (this.publicaciones.length == 0) {
      alert("No hay publicaciones en el carrito. Agregue publicaciones para poder realizar la compra.");
      this.router.navigate(['']);
      return;
    }

    // Obtengo el id del vendedor
    let vendedorId = this.publicaciones[0].vendedor.id;

    // Obtengo los metodos de pago del vendedor
    this.checkoutService.metodosDePagoDelVendedor(vendedorId).subscribe((resp: any) => {
      this.seleccionPago = resp;
    });

    // guardo el id y la cantidad de cada publicacion en un array
    this.publicaciones.forEach((publicacion: any) => {
      this.publicacionesIdCantidad.push({publicacionId: publicacion.id, cantidad: publicacion.cantidad});
    });
  }

  public finalizarCompra(){

      let datos = {
      clienteId: this.clienteId,
      metodoDePago: this.formaDePago,
      publicaciones: this.publicacionesIdCantidad,
    }

    // Mando los datos al servidor y verifico errores
    this.checkoutService.postCheckout(datos).subscribe((resp: any) => { }, (err: any) => {

      if (err.status == 201) {
        this.cartService.removeAllCart();
        alert("Compra realizada con éxito!");
        this.router.navigate(['order-details']);

      } else {
        alert("Verifique los datos ingresados");
      }

    });
  }
} // fin clase CheckoutComponent
