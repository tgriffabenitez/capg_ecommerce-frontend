import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public inputPassword : string = "";
  public inputEmail : string = "";

  constructor(private loginService : LoginService) { }

  onSumbitForm(data : any) {
    console.log(data)
    this.inputEmail = data.inputEmail;
    this.inputPassword = data.inputPassword;

    this.loginService.searchUser(this.inputEmail, this.inputPassword).subscribe((data : any) => {

    });

  }
}
