import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartsModel } from './carts.model';

@Component({
  selector: 'app-show-carts',
  templateUrl: './show-carts.component.html',
  styleUrls: ['./show-carts.component.css'],
})
export class ShowCartsComponent implements OnInit {
  cartId: number = 1;

  model: Array<any> = new Array<any>();
 


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.showCart(this.cartId);
  }

  showCart(cartId) {
    this.cartService.showCart(cartId).subscribe({
      next: (res) => {
        this.model= res;
        console.log(this.model)
      },
      error: (err) => {
        console.log('Erro ao listar carrinho', err);
      },
    });
  }
}
