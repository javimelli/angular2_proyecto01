import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  imgUrl:string = '../assets/angular.png';
  name:string = 'anyBody';
  nombreClase:string = "red";
//Es para probar ngIf en el html
  booleano:boolean = true;
  redActive:boolean = true; 
  yellowActive:boolean = false;
//Array
  paises = [
            {desc:'elem1', check:true},
            {desc:'elem2', check:true},
            {desc:'elem3', check:false}
  ];
//Mapa de clases CSS
  pclases = {
          "red": false,
          "yellow": true
  };
//valor de width
  ancho:number = 20;

  setName(name:string){
      this.name = name;
  }
  
  cambiarBooleano(){
      this.booleano = !this.booleano;
  }
  
  cambiarClase(){
      this.redActive = !this.redActive;
      this.yellowActive = !this.yellowActive;
  }
  
  cambiarMapaClases(){
      this.pclases.red = !this.pclases.red;
      this.pclases.yellow = !this.pclases.yellow;
  }
  
  estilo(){
      return {
          'color': this.redActive? 'red' : 'yellow'
      }
  }
}
