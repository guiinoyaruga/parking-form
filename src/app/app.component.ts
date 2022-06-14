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

    const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
    const saveThings = JSON.parse(localStorage.getItem('registers') || '[]')

    tbody.innerText ='';

    for (let i = 0; i < saveThings.length; i++) {
    let tr = tbody.insertRow() ;

    let td_car = tr.insertCell();
    let td_input = tr.insertCell();
    let td_output = tr.insertCell();

    td_car.append(saveThings[i].car);
    td_input.append(saveThings[i].input);
    td_output.append(saveThings[i].output);

    td_car.classList.add('center');
    td_input.classList.add('center');
    td_output.classList.add('center');

     }
   }


}



