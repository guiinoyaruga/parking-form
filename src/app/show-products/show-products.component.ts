import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductRegisterService } from '../product-register.service';
import { CartService } from '../cart.service';
import { ProductsModel } from './products.model';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {

  product: ProductsModel = new ProductsModel();
  products: Array<any> = new Array<any>();

  constructor(
    private productRegisterService: ProductRegisterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

  }

  registerProducts() {
    console.log(this.product);
    this.productRegisterService.registerProducts(this.product).subscribe(
      {next: (product) => {
        this.product = new ProductsModel();
        this.showProducts();
      },
      error: (err) => {
        console.log('Erro ao atualizar o produto', err);
      }}
    );
  }

  updateProducts(id: number) {
    console.log(this.product);
    this.productRegisterService.updateProducts(id, this.product).subscribe(
     { next: (product) => {
        this.product = new ProductsModel();
        this.showProducts();
      },
      error: (err) => {
        console.log('Erro ao cadastrar produto', err);
      }}
    );
  }

  showProducts() {
    this.productRegisterService.showProducts().subscribe(
      {next: (products) => {
        this.products = products;
      },
      error: (err) => {
        console.log('Erro ao listar produtos', err);
      }}
    );
  }

  async addCart(id: number) {
    this.productRegisterService.addCart(await this.cartService.getCarrinhoId(), id,).subscribe(
     { next: (product) => {
        this.product = new ProductsModel();
        this.showProducts();
      },
      error: (err) => {
        console.log('Erro ao cadastrar produto', err);
      }}
    );
  }
}
