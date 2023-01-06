import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaDto } from 'src/app/obj/PersonaDto';
import { Proyecto } from 'src/app/obj/Proyecto';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  persDatos!: PersonaDto;
  listaPro: Proyecto[] = [];
  modoEdicion : boolean = false;

  abrirModal(id: any) {
    id.style.display = "block";
  }

  cerrarModal(id: any) {
    id.style.display = "none";
  }

  enviar(f : NgForm, proId : number){
    if(f.valid == true){
      let pro : Proyecto = {
      id : proId, nombre : f.value.nombre, 
      descripcion : f.value.descripcion, 
      fecha : f.value.fecha,
      persona : {id : this.persDatos.id}
    }
      this.datos.editarPro(pro).subscribe();
    }
    else
    {
      alert("Rellene los campos que faltan.");
    }    
  }

  agregarPro() {
    let fechaActual = new Date;

    let pro: Proyecto = {
      id: 0, nombre: "blank", descripcion: "blank", 
      fecha: fechaActual, persona: { id: this.persDatos.id }
    }

    this.datos.agregarPro(pro).subscribe(response => {
      this.listaPro.push(response);
    });
  }

  eliminarPro(ids : number){
    this.datos.eliminarPro(ids).subscribe();
    this.listaPro.forEach((element,index)=>{
      if(element.id == ids) this.listaPro.splice(index,1);
   });
  }

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.persDatos = this.datos.datosPortfolio;
    this.listaPro = this.datos.datosPortfolio.listaProyecto;
    this.datos.editEmision.subscribe(valor => {      
      this.modoEdicion = valor;
   }); 
  }

}
