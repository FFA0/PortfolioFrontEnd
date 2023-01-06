import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { Tecnologia } from 'src/app/obj/Tecnologia';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  persDatos! : PersonaDto;
  listaTec : Tecnologia[] = [];
  modoEdicion : boolean = false;

  abrirModal(id : any){
    id.style.display = "block";
  }

  cerrarModal(id : any){
    id.style.display = "none";
  }

  enviar(f : NgForm, tecId : number){
    if(f.valid == true){
      let tec : Tecnologia = {
      id : tecId, nombre : f.value.nombre, 
      porcentaje : f.value.porcentaje , 
      persona : {id : this.persDatos.id}
    }
      this.datos.editarTec(tec).subscribe();
    }
    else
    {
      alert("Rellene los campos que faltan.");
    }    
  }

  agregarTec(){
    let tec : Tecnologia = {
      id : 0, nombre : "blank", porcentaje : 0, persona : {"id" : this.persDatos.id}
    }
    this.datos.agregarTec(tec).subscribe(response => {
      this.listaTec.push(response);
    });
  }

  eliminarTec(ids : number){
    this.datos.eliminarTec(ids).subscribe();
    this.listaTec.forEach((element,index)=>{
      if(element.id == ids) this.listaTec.splice(index,1);
   });
  }

  constructor(private datos : DatosService) { }

  ngOnInit() {
    this.persDatos = this.datos.datosPortfolio;
    this.listaTec = this.datos.datosPortfolio.listaTecnologia;
    this.datos.editEmision.subscribe(valor => {      
      this.modoEdicion = valor;
   });  
  }

}
