import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   this.showItens();
  }

  title = 'parking-sys';

  registers: any[] = [];
  registersSave: any[] = [];
  registros: any[] =[]

  registrar($event: []){
    this.registros = JSON.parse(localStorage.getItem('registers') || '[]');
    this.registersSave= [...this.registros, $event];
    this.registers.push($event);
    localStorage.setItem('registers', JSON.stringify(this.registersSave))
    this.showItens();
  }

  showItens(){
    this.registers = JSON.parse(localStorage.getItem('registers') || '[]')
   }
}



