import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicio/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']

})
export class BannerComponent implements OnInit {

  perBanner: String = "";
  imagenDefault: String = "./assets/imagenDefault.png";

  constructor(private per: PersonaService) { }

  cambiarBanner(valor: String) {
    this.perBanner = valor;
  }

  ngOnInit(): void {
    this.per.traerPortfolio().subscribe({
      next: (response) => this.perBanner = response.urlBanner,
      error: (e) => console.error(e)
    });
  }

}
