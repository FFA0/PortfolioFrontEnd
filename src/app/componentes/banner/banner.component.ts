import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //info que se obtiene del json
  banner: any;
  log : any;

  constructor(private datos : DatosService, private login : LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.banner = data.Banner;
    })
    this.log = this.login;
  }

}
