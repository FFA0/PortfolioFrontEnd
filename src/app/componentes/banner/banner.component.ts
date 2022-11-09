import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //info que se obtiene del json
  Banner: any;

  //estilos para botones
  botonArchivo = {"margin-top" : "5px", "margin-left":"-35px", "position" : "absolute"}

  constructor(private datos : DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.Banner = data.Banner;
    })
  }

}
