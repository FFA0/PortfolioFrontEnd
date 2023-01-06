import {
  Component,
  OnInit,
} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/obj/Experiencia';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  persDatos!: PersonaDto;
  listaExp: Experiencia[] = [];
  imagenDefault : any = "./assets/imagenDefault.png";
  modoEdicion : boolean = false;

  //editar texto 
  abrirModal(id: any) {
    id.style.display = "block";
  }

  cerrarModal(id: any) {
    id.style.display = "none";
  }

  enviar(exp: NgForm, expId: number) {
    if (exp.valid == true) {
      let e: Experiencia = {
        id: expId, tituloPuesto: exp.value.tituloPuesto, empresa: exp.value.empresa,
        trabajoActual: exp.value.trabajoActual, fechaInicio: exp.value.fechaInicio,
        fechaFinal: exp.value.fechaFinal,urlFoto : exp.value.urlFoto ,actividad: exp.value.actividad,
        tipo : {id :exp.value.tipo, tipo : ""}, persona: { id: this.persDatos.id }
      }
      this.datos.editarExp(e).subscribe();           
    }
    else {
      alert("Rellene los campos que faltan.")
    }
  }

  agregarExp() {
    let fechaActual = new Date;

    let ex: Experiencia = {
      id: 0, tituloPuesto: "blank", empresa: "blank",
      trabajoActual: false, actividad: "blank", fechaInicio: fechaActual,
      fechaFinal: fechaActual,urlFoto : "", tipo: {id : 1, tipo : ""},
      persona: { "id": this.persDatos.id }
    }
    if (this.persDatos != null) {
      this.datos.agregarExp(ex).subscribe(response => {
        this.listaExp.push(response);
      });
     
    }
  }

  eliminarExp(ids : number){
    this.datos.eliminarExp(ids).subscribe();
    this.listaExp.forEach((element,index)=>{
      if(element.id == ids) this.listaExp.splice(index,1);
   });
  }

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.persDatos = this.datos.datosPortfolio;
    this.listaExp = this.datos.datosPortfolio.listaExperiencia;    
    this.datos.editEmision.subscribe(valor => {      
      this.modoEdicion = valor;
   });    
  }
}
