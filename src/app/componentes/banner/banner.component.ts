import { Component, OnInit } from '@angular/core';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']

})
export class BannerComponent implements OnInit {

  persDatos : any;
  imagenDefault : String = "./assets/imagenDefault.png";
  
  constructor(private datos : DatosService) { }

  ngOnInit(): void {
    this.persDatos = this.datos.datosPortfolio
  }

}
