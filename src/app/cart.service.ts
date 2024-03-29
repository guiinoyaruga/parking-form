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

  showCart(cartId: number): Observable<any> {
    return this.http.get(`${this.URL_API}/carts/${cartId}`);
  }

  createCart(): Observable<any> {
    return this.http.post(`${this.URL_API}/carts`, {});
  }

  async getCarrinhoId() {
    return localStorage.getItem('carrinho') ? localStorage.getItem('carrinho') : await this.gerarUmCarrinho()
  }

  async gerarUmCarrinho() {
    let carrinhoObjetoGerado = await this.createCart().toPromise()
    this.saveCarrinho(carrinhoObjetoGerado.id)

    return carrinhoObjetoGerado.id;
  }

  saveCarrinho(session) {
    if(session) {
      return localStorage.setItem('carrinho', session)
    }

    throw new Error()
  }

}
