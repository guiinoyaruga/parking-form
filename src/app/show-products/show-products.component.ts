import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductRegisterService } from '../product-register.service';
import { ProductsModel } from './products.model';


@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

 product: ProductsModel = new ProductsModel();
 products: Array<any> = new Array<any>();

 constructor(private productRegisterService: ProductRegisterService){}

  ngOnInit(): void {

  }

  registerProducts(){
    console.log(this.product)
    this.productRegisterService.registerProducts(this.product).subscribe(product =>{
    this.product = new ProductsModel()
    this.showProducts();
    }, err =>{
      console.log("Erro ao atualizar o produto", err)
    })
  }

  updateProducts(id: number){
    this.productRegisterService.updateProducts(id, this.product).subscribe(product =>{
      this.product = new ProductsModel()
      this.showProducts();
      }, err =>{
        console.log("Erro ao cadastrar produto", err)
      })
  }

  showProducts(){
  this.productRegisterService.showProducts().subscribe(products =>{
    this.products = products;
  }, err =>{
    console.log("Erro ao listar produtos", err);
  })
  }

}
