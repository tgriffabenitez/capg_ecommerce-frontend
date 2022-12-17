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

    this.loginService.searchUser(this.inputEmail, this.inputPassword).subscribe((res : any) => {
      console.log(res);

      // guardo el id del cliente en el localStorage
      localStorage.setItem("clienteId", res.id);

      alert("Bienvenido!");
      this.router.navigate(['']);
    }, (err : any) => {
      alert("Verifique los datos ingresados");
    })


  }
}
