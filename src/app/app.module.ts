import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductRegisterService } from './product-register.service';
import { CartService } from './cart.service';
import { ShowCartsComponent } from './show-carts/show-carts.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, ShowProductsComponent, ShowCartsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ProductRegisterService,
    CartService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
