import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  @Output() emitir = new EventEmitter<any>();

  cambiar(){
    this.emitir.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}