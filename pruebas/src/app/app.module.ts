import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonDeEdicionComponent } from './components/boton-de-edicion/boton-de-edicion.component';
import { Componente1Component } from './components/componente1/componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonDeEdicionComponent,
    Componente1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
