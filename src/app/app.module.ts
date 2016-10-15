import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    /**
     * Toda aplicación angular tiene un descriptor de la aplicación.
     * Esta clase nunca tendrá lógiaca. No va a tener implementación. Solamente
     * sirve para porder colocar la etiqueta NgModule. Este descriptor
     * indica la siguiente información:
     * declarations: Se indican los componentes declarados.
     * imports: Se indican los módulos importados.
     * bootstrap: Se indica el componente principal.
     * 
     */
}