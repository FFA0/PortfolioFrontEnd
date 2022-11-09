import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  
  //info que se obtiene del json
  Acerca: any;
  //boolean para edición
  nombreTitulo : boolean = false;
  informacion : boolean = false;

  //estilos para botones
  botonAcerca : any = {"margin-bottom":"5px", "margin-right":"-5px"};
  botonArchivo : any = {"margin-top" : "-70px","margin-right":"-5px"};

  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.Acerca = data;
    })
  }
}
