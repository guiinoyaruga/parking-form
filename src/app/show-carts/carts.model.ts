export class CartsModel {
  id!: number;
  total!: number;
  Carts_Items!: [{
    qty:number;
    Product:{
     name:string;
    }

  }
]

}
