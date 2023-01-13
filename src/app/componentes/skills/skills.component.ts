import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaDto } from 'src/app/interfaces/PersonaDto';
import { Tecnologia } from 'src/app/interfaces/Habilidad';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TecnologiaService } from 'src/app/servicio/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaTec: Tecnologia[] = [];
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

  enviar(f: NgForm, tecId: number) {
    let tec: Tecnologia = {
      id: tecId, nombre: f.value.nombre,
      porcentaje: f.value.porcentaje,
      persona: { id: 1 }
    }
    if (f.valid) {
      this.tecServ.editarTec(tec).subscribe({
        error: (e) => console.error(e)
      });
      (document.getElementById("modalSkill" + tecId) as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los campos que faltan.");
    }
  }

  agregarTec() {
    let tec: Tecnologia = {
      id: 0, nombre: "vacio", porcentaje: 0,
      persona: { "id": 1 }
    }
    this.tecServ.agregarTec(tec).subscribe({
      next: (response) => this.listaTec.push(response),
      error: (e) => console.error(e)
    });
  }

  eliminarTec(valor: number) {
    this.tecServ.eliminarTec(valor).subscribe();
    this.listaTec.forEach((element, index) => {
      if (element.id == valor) this.listaTec.splice(index, 1);
    });
  }

  constructor(private perServ: PersonaService,
    private tecServ: TecnologiaService) { }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (v) => this.listaTec = v.listaTecnologia,
      error: (e) => console.error(e)
    });
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
  }

}
