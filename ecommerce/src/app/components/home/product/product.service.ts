import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getPublicaciones(): Observable<any> {
    return this.http.get("http://localhost:8080/publicacion");
  }

  public getPublicacionByCategoria(categoria: string): Observable<any> {
    return this.http.get("http://localhost:8080/publicacion?tienda=" + categoria);
  }

  public getPublicacionByTienda(tienda: string): Observable<any> {
    return this.http.get("http://localhost:8080/publicacion?tienda=" + tienda);
  }


}
