import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductRegisterService } from './product-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }
  constructor (private service: ProductRegisterService){
  }

}



