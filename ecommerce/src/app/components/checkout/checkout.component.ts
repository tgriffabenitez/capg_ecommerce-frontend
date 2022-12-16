import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public firstName : string | undefined;
  public lastName : string | undefined;
  public email : string | undefined;
  public address : string | undefined;
  public numero: string | undefined;
  public piso: string | undefined;
  public depto: string | undefined;
  public debito : string | undefined;
  public credito : string | undefined;
  public nombreTarjeta : string | undefined;
  public numeroTarjeta : string | undefined;
  public expiracionTarjeta : string | undefined;
  public cvvTarjeta : string | undefined;


  constructor() { }

  ngOnInit(): void { }

  public submitForm(){
    alert("Formulario enviado");
  }

}
