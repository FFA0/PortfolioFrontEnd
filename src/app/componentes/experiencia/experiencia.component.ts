import {
  Component,
  OnInit,
} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { TipoEmpleo } from 'src/app/interfaces/TipoEmpleo';
import { ExperienciaService } from 'src/app/servicio/experiencia.service';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TipoEmpleoService } from 'src/app/servicio/tipo-empleo.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  listaExp: Experiencia[] = [];
  listaTipo: TipoEmpleo[] = [];
  usuarioAut: boolean = false;
  imagenDefault: any = "./assets/imagenDefault.png";
  formDefault: any;

  abrirModal(id: any, form: NgForm) {
    id.style.display = "block";
    this.formDefault = form.value;
  }

  cerrarModal(id: any, form: NgForm) {
    id.style.display = "none";
    form.resetForm(this.formDefault);
  }

  enviar(exp: NgForm, expId: number) {
    let e: Experiencia = {
      id: expId, tituloPuesto: exp.value.tituloPuesto, empresa: exp.value.empresa,
      trabajoActual: exp.value.trabajoActual, fechaInicio: exp.value.fechaInicio,
      fechaFinal: exp.value.fechaFinal, urlFoto: exp.value.urlFoto,
      actividad: exp.value.actividad, tipo: exp.value.tipo, persona: { id: 1 }
    }
    if (exp.valid) {
      this.expServ.agregarExp(e).subscribe();
      (document.getElementById("modalExp" + expId) as HTMLElement).style.display = "none";
    }
    else {
      alert("Rellene los campos que faltan.")
    }
  }

  agregarExp() {
    let fechaActual = new Date;

    let exp: Experiencia = {
      id: 0, tituloPuesto: "vacio", empresa: "vacio",
      trabajoActual: false, actividad: "vacio", fechaInicio: fechaActual,
      fechaFinal: fechaActual, urlFoto: "", tipo: { id: 1, tipo: "" },
      persona: { "id": 1 }
    }
    this.expServ.agregarExp(exp).subscribe({
      next: (response) => this.listaExp.push(response),
      error: (e) => console.error(e)
    });
  }


  eliminarExp(ids: number) {
    this.expServ.eliminarExp(ids).subscribe();
    this.listaExp.forEach((element, index) => {
      if (element.id == ids) this.listaExp.splice(index, 1);
    });
  }

  constructor(private perServ: PersonaService,
    private expServ: ExperienciaService,
    private tipoServ: TipoEmpleoService) { }

  ngOnInit() {
    this.perServ.traerPortfolio().subscribe({
      next: (response) => this.listaExp = response.listaExperiencia,
      error: (e) => console.error(e)
    });
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
    this.tipoServ.traerListaTipo().subscribe({
      next: (response) => this.listaTipo = response,
      error: (e) => console.error(e)
    });

  }
}
