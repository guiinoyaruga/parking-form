import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parking-sys';

  registers: any[] = [];


  registrar($event: []){

    console.log($event);
    //const register = {...$event};
    this.registers.push($event);
    localStorage.setItem('registros', JSON.stringify($event))

    }

}
