import { ShowCartsComponent } from './show-carts/show-carts.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: ShowProductsComponent },
  {path:'cart', component: ShowCartsComponent },
  {path:'', component: ShowProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
