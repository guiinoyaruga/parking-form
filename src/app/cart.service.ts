import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartsModel } from './show-carts/carts.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  URL_API = 'http://localhost:3008';

  constructor(private http: HttpClient) { }

   public showCart(cartId: number): Observable<any> {
    return this.http.get(`${this.URL_API}/carts/${cartId}`);
   }
}
