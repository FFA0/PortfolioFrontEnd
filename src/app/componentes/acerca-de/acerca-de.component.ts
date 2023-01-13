import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Localidad } from 'src/app/interfaces/Localidad';
import { PersonaDto } from 'src/app/interfaces/PersonaDto';
import { LocalidadService } from 'src/app/servicio/localidad.service';
import { PersonaService } from 'src/app/servicio/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {

  @Output() imagenBanner = new EventEmitter<String>();

  persDatos: PersonaDto;
  listaLoc: Localidad[] = [];
  usuarioAut: boolean = false;
  imagenDefaultFoto = "./assets/imagenDefaultFoto.png";
  formDefault: any;

  enviar(pers: NgForm) {
    let p: PersonaDto = {
      id: this.persDatos.id, nombre: pers.value.nombre, apellido: pers.value.apellido,
      titulo: pers.value.titulo, acerca: pers.value.acerca, urlFoto: pers.value.urlFoto,
      urlBanner: pers.value.urlBanner, listaEducacion: this.persDatos.listaEducacion,
      listaExperiencia: this.persDatos.listaExperiencia,
      listaProyecto: this.persDatos.listaProyecto,
      listaTecnologia: this.persDatos.listaTecnologia,
      localidad: pers.value.localidad
    }
    if (pers.valid) {
      this.imagenBanner.emit(p.urlBanner);
      this.perServ.editarPer(p).subscribe();
      (document.getElementById("modalAcerca") as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los datos que faltan.");
    }
  }

  abrirModal(id: any, form: NgForm) {
    id.style.display = "block";
    this.formDefault = form.value;
  }

  cerrarModal(id: any, form: NgForm) {
    id.style.display = "none";
    form.resetForm(this.formDefault);
  }

  constructor(private perServ: PersonaService,
    private locServ: LocalidadService) {
    this.persDatos =
    {
      id: 0,
      nombre: "",
      apellido: "",
      titulo: "",
      acerca: "",
      urlFoto: "",
      urlBanner: "",
      listaEducacion: [],
      listaExperiencia: [],
      listaProyecto: [],
      listaTecnologia: [],
      localidad: { id: 1, localidad: "" }
    }
  }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (response) => this.persDatos = response,
      error: (e) => console.error(e)
    });
    this.locServ.traerLista().subscribe({
      next: (response) => this.listaLoc = response,
      error: (e) => console.error(e)
    });

    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
  }
}
