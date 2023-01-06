import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/obj/Educacion';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  persDatos!: PersonaDto;
  listaEdu!: Educacion[];
  imagenDefault: any = "./assets/imagenDefault.png";
  modoEdicion: boolean = false;

  abrirModal(id: any) {
    id.style.display = "block";
  }

  cerrarModal(id: any) {
    id.style.display = "none";
  }

  enviar(f: NgForm, eduId: number) {
    if (f.valid == true) {
      let edu: Educacion = {
        id: eduId, nombre: f.value.nombre, descripcion: f.value.descripcion,
        url: f.value.url, persona: { id: this.persDatos.id }
      }
      this.datos.editarEdu(edu).subscribe();
    }
    else {
      alert("Rellene los campos que faltan.");
    }
  }

  agregarEdu() {
    let e: Educacion = {
      id: 0, nombre: "blank", descripcion: "blank", url: "",
      persona: { "id": this.persDatos.id }
    }
    this.datos.agregarEdu(e).subscribe(response => {
      this.listaEdu.push(response);
    });
  }

  eliminarEdu(ids: number) {
    this.datos.eliminarEdu(ids).subscribe();
    this.listaEdu.forEach((element, index) => {
      if (element.id == ids) this.listaEdu.splice(index, 1);
    });
  }

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.persDatos = this.datos.datosPortfolio;
    this.listaEdu = this.datos.datosPortfolio.listaEducacion;
    this.datos.editEmision.subscribe(valor => {
      this.modoEdicion = valor;
    });
  }

}
