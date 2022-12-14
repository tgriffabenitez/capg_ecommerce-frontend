import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';
import { LoginComponent } from './components/login/login.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { ProductItemComponent } from './components/home/product-list/product-item/product-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    HomeComponent,
    CartItemComponent,
    LoginComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    CheckoutComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
