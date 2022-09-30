import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef,  } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @ViewChild("clon", {read : TemplateRef}) clon! : TemplateRef<any>; //template
  @ViewChild("contenedor", {read : ViewContainerRef}) contenedor! : ViewContainerRef; //contenedor


  logoNuevo(id : any){
  }

  editar(id : any){
    id.hidden = !id.hidden;
    id.previousSibling.textContent = id.value;
  }

  borrar(e : any){
   e.target.parentElement.parentElement.parentElement.remove();
  }

  agregar(){
    this.contenedor.createEmbeddedView(this.clon);
  }

  educacion : any;

  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.educacion = data;
    })
  }

}
