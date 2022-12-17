import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public searchUser(email: string, password: string){
    return this.http.get("http://localhost:8080/cliente?email=" + email + "&password=" + password);
  }


}
