import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShoppingCartHistoryComponent } from './components/shopping-cart-history/shopping-cart-history.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "carrito", component: ShoppingCartComponent},
  {path: "compras", component: ShoppingCartHistoryComponent},
  {path: "login", component: LoginComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "error", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
