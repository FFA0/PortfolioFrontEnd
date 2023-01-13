import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/interfaces/Educacion';
import { PersonaDto } from 'src/app/interfaces/PersonaDto';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEdu!: Educacion[];
  usuarioAut: boolean = false;
  imagenDefault: any = "./assets/imagenDefault.png";
  formDefault: any;

  abrirModal(id: any, form: NgForm) {
    id.style.display = "block";
    this.formDefault = form.value;
  }

  cerrarModal(id: any, form: NgForm) {
    id.style.display = "none";
    form.resetForm(this.formDefault)
  }

  enviar(form: NgForm, eduId: number) {
    let edu: Educacion = {
      id: eduId, nombre: form.value.nombre,
      descripcion: form.value.descripcion, url: form.value.url,
      persona: { "id": 1 }
    }
    if (form.valid) {
      this.eduServ.editarEdu(edu).subscribe({
        error: (e) => console.error(e)
      });
      (document.getElementById("modalEdu" + eduId) as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los campos que faltan.")
    }
  }

  agregarEdu() {
    let edu: Educacion = {
      id: 0, nombre: "vacio",
      descripcion: "vacio", url: "",
      persona: { "id": 1 }
    }
    this.eduServ.agregarEdu(edu).subscribe(response => {
      this.listaEdu.push(response);
    });
  }

  eliminarEdu(ids: number) {
    this.eduServ.eliminarEdu(ids).subscribe();
    this.listaEdu.forEach((element, index) => {
      if (element.id == ids) this.listaEdu.splice(index, 1);
    });
  }

  constructor(private perServ: PersonaService,
    private eduServ: EducacionService) { }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (v) => this.listaEdu = v.listaEducacion,
      error: (e) => console.error(e)
    });
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
  }

}
