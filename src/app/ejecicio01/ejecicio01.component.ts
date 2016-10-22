import { Component, OnInit } from '@angular/core';

interface Item {
    nombre:string;
    check:boolean
}

@Component({
  selector: 'app-ejecicio01',
  templateUrl: './ejecicio01.component.html',
  styleUrls: ['./ejecicio01.component.css']
})
export class Ejecicio01Component {
    
    alimentos: Item[] = [];
    
    add(nombre:string){
        this.alimentos.push({nombre, check:false})
    }
    
    delete(item: Item){
        let index = this.alimentos.indexOf(item);//Cogemos la posición del item
        if(index > -1){
            this.alimentos.splice(index,1);//Eliminamos el item de la posición index
        }
    }

}
