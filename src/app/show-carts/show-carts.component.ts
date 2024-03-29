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

  carrinho: any = {};
 


  constructor(private cartService: CartService) {}

  async ngOnInit() {
    this.showCart(await this.cartService.getCarrinhoId());
  }

  showCart(cartId) {
    this.cartService.showCart(cartId).subscribe({
      next: (res) => {
        this.carrinho = res;
        console.log(this.carrinho)
      },
      error: (err) => {
        console.log('Erro ao listar carrinho', err);
      },
    });
  }
}
