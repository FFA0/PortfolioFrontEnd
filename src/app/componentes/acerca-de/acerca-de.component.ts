import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  
  //info que se obtiene del json
  acerca: any;
  log : any;  
  //boolean para edición
  nombreTitulo : boolean = false;
  informacion : boolean = false;
  
  constructor(private datos : DatosService, private login : LoginService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.acerca = data;
    })
    this.log = this.login; 
  }
}
