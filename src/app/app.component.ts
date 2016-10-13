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
  
  setName(name:string){
      this.name = name;
  }
}
