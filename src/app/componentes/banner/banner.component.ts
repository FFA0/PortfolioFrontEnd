import { Component, ElementRef, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Banner: any;

  constructor(private datos : DatosService) { }


  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.Banner = data;
    })
  }

}
