import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getPublicaciones() {
    return this.http.get("http://localhost:8080/publicacion");
  }

}
