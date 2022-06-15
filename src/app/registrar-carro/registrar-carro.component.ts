import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-registrar-carro',
  templateUrl: './registrar-carro.component.html',
  styleUrls: ['./registrar-carro.component.css']
})
export class RegistrarCarroComponent implements OnInit {

  constructor() {}
  ngOnInit(): void{
  }

  @Output() aoRegistrar = new EventEmitter<any>();
  @Input() registers: string [] = [];;

  car: string[] = [];
  output: string [] = [];

  registerInput(){
    console.log('Registrado com sucesso');
    const valorRegistrar = {car: this.car, date: new Date() , output: this.output}
    this.aoRegistrar.emit(valorRegistrar);
    this.clearFields();
  }

  clearFields(){
    this.car = [];
    this.output = [];
  }
}
