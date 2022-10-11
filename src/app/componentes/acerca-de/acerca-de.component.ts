import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {

  nombreTitulo : boolean = false;
  informacion : boolean = false;

  botonAcerca : any = {"margin-bottom" : "15px", "margin-right" : "5px"};
  botonArchivo : any = {"margin-top" : "-70px", "margin-right" : "5px"};

  visibilidad(){ 
  }
  
  Acerca: any;

  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.Acerca = data;
    })
  }
}
