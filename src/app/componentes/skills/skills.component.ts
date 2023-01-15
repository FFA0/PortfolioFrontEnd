import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaService } from 'src/app/servicio/persona.service';
import { HabilidadService } from 'src/app/servicio/habilidad.service';
import { Habilidad } from 'src/app/interfaces/Habilidad';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaHabilidad : Habilidad[] = [];
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

  enviar(f: NgForm, habilId: number) {
    let habil: Habilidad = {
      id: habilId, nombre: f.value.nombre,
      porcentaje: f.value.porcentaje,
      persona: { id: 1 }
    }
    if (f.valid) {
      this.HabilServ.editarHabil(habil).subscribe({
        error: (e) => console.error(e)
      });
      (document.getElementById("modalSkill" + habilId) as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los campos que faltan.");
    }
  }

  agregarHabil() {
    let habil: Habilidad = {
      id: 0, nombre: "vacio", porcentaje: 0,
      persona: { "id": 1 }
    }
    this.HabilServ.agregarHabil(habil).subscribe({
      next: (response) => this.listaHabilidad.push(response),
      error: (e) => console.error(e)
    });      
  }

  eliminarHabil(valor: number) {
    this.HabilServ.eliminarHabil(valor).subscribe();
    this.listaHabilidad.forEach((element, index) => {
      if (element.id == valor) this.listaHabilidad.splice(index, 1);
    });
  }

  constructor(private perServ: PersonaService,
    private HabilServ: HabilidadService) { }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (response) => this.listaHabilidad = response.listaHabilidad,
      error: (e) => console.error(e)  
    });
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });    
  }

}
