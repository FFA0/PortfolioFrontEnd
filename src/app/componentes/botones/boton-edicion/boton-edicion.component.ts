import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-boton-edicion',
  templateUrl: './boton-edicion.component.html',
  styleUrls: ['./boton-edicion.component.css']
})
export class BotonEdicionComponent implements OnInit {

  @Output() valor = new EventEmitter<boolean>();

  otroValor : boolean = true;

  modoEdit! : boolean;

  cambiarValor(){
    this.otroValor = !this.otroValor;
    this.valor.emit(this.otroValor);
  }

  constructor(private datos : DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(datos =>
      this.modoEdit = datos.Login) 
  }

}
