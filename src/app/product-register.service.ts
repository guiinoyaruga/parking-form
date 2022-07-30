import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from './show-products/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {

  constructor(private http: HttpClient) {
  }

  registerProducts(product: ProductsModel): Observable<any>{
   return this.http.post("http://localhost:3008/produtos", product);
  }

  updateProducts(id:any, product: ProductsModel): Observable<any>{
    return this.http.put("http://localhost:3008/produtos/".concat(id), product );
  }

  showProducts(): Observable<any>{
     return this.http.get("http://localhost:3008/produtos");
   }
  addCart(cartId:any, productId: ProductsModel ): Observable<any>{
    return this.http.put(`http://localhost:3008/carts/${cartId}/products/`,productId)
  }
  }
