import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {


  visibilidad(e : any, id : any){
    id.hidden = e;
  }
  
  Acerca: any;

  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.Acerca = data;
    })
  }
}
