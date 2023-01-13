import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { PersonaService } from 'src/app/servicio/persona.service';
import { ProyectoService } from 'src/app/servicio/proyecto.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  listaPro: Proyecto[] = [];
  usuarioAut: boolean = false;
  formDefault: any;

  abrirModal(id: any, form: NgForm) {
    id.style.display = "block";
    this.formDefault = form.value;
  }

  cerrarModal(id: any, form: NgForm) {
    id.style.display = "none";
    form.resetForm(this.formDefault);
  }

  enviar(form: NgForm, proId: number) {
    let pro: Proyecto = {
      id: proId, nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      fechaInicio: form.value.fechaInicio,
      fechaFinal: form.value.fechaFinal,
      urlProyecto : form.value.urlProyecto,
      persona: { id: 1 }
    }
    if (form.valid) {
      this.proServ.editarPro(pro).subscribe({
        error: (e) => console.error(e)
      });
      (document.getElementById("modalPro" + proId) as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los campos que faltan.");
    }
  }

  agregarPro() {
    let fechaActual = new Date;

    let pro: Proyecto = {
      id: 0, nombre: "vacio",
      descripcion: "vacio",
      fechaInicio: fechaActual,
      fechaFinal: fechaActual,
      urlProyecto : "",
      persona: { id: 1 }
    }
    this.proServ.agregarPro(pro).subscribe({
      next: (response) => this.listaPro.push(response),
      error: (e) => console.error(e)
    });
  }

  eliminarPro(ids: number) {
    this.proServ.eliminarPro(ids).subscribe();
    this.listaPro.forEach((element, index) => {
      if (element.id == ids) this.listaPro.splice(index, 1);
    });
  }

  constructor(private perServ: PersonaService,
    private proServ: ProyectoService) { }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (v) => this.listaPro = v.listaProyecto,
      error: (e) => console.error(e)
    });
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
  }

}
