import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public inputPassword : string = "";
  public inputEmail : string = "";

  constructor(private loginService:LoginService, private router:Router) { }

  onSumbitForm(data : any) {
    this.inputEmail = data.inputEmail;
    this.inputPassword = data.inputPassword;

    let userData = {
      "email": this.inputEmail,
      "contrasenia": this.inputPassword
    }

    this.loginService.searchUser(userData).subscribe((res : any) => {
      console.log(res);

      // guardo los datos del cliente en el localStorage
      localStorage.setItem("clienteId", res.id);
      localStorage.setItem("clienteNombre", res.nombre);
      localStorage.setItem("clienteApellido", res.apellido);
      localStorage.setItem("clienteEmail", res.email);
      localStorage.setItem("clienteTelefono", res.telefono);
      localStorage.setItem("direccionCalle", res.direccionCalle);
      localStorage.setItem("direccionNumero", res.direccionNumero);
      localStorage.setItem("direccionPiso", res.direccionPiso);


      alert("Bienvenido!");
      this.router.navigate(['']);
    }, (err : any) => {
      alert("Verifique los datos ingresados");
    })


  }
}
