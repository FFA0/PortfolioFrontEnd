import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-boton-eliminar',
  templateUrl: './boton-eliminar.component.html',
  styleUrls: ['./boton-eliminar.component.css']
})
export class BotonEliminarComponent implements OnInit {

  @Output() emitir = new EventEmitter<any>();
  
  cambiar() {
    this.emitir.emit()
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
  }

}
