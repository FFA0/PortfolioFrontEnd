import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-archivo',
  templateUrl: './boton-archivo.component.html',
  styleUrls: ['./boton-archivo.component.css']
})
export class BotonArchivoComponent implements OnInit {

  @Output() emitir = new EventEmitter<any>();
  @Input() estilos : any;
  
  cambiar() {
    this.emitir.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
