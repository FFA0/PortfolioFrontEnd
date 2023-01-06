import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {

  imagenDefaultFoto = "./assets/imagenDefaultFoto.png";
  modoEdicion : boolean = false;

  persdatos: any;

  submit(pers: NgForm) {
    if (pers.valid == true) {
      let p: PersonaDto = {
        id : pers.value.id, nombre : pers.value.nombre, apellido : pers.value.apellido,
        titulo : pers.value.titulo, acerca : pers.value.acerca, urlFoto : pers.value.urlFoto,
        urlBanner : pers.value.urlBanner, listaEducacion : this.persdatos.listaEducacion,
        listaExperiencia : this.persdatos.listaExperiencia, listaProyecto : this.persdatos.listaProyecto, 
        listaTecnologia : this.persdatos.listaTecnologia, localidad : {id : this.persdatos.localidad.id, localidad : ""}
      }           
      this.datos.editarPer(p).subscribe();

    }
    else {
      alert("Rellene los datos que faltan.");
    }
  }

  abrirModal(id: any) {
    id.style.display = "block";
  }

  cerrarModal(id: any) {
    id.style.display = "none";
  }

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.persdatos = this.datos.datosPortfolio;
    this.datos.editEmision.subscribe(valor => {      
      this.modoEdicion = valor;
   });
  }
}
