import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products!: any;
  public stores!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/publicacion").subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });

    this.http.get("http://localhost:8080/publicacion?tienda=").subscribe((data: any) => {
      this.stores = data;
      console.log(this.stores);
    });

  }
}
