import { Component,  OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @ViewChild("template", { read: TemplateRef }) clon!: TemplateRef<any>;
  @ViewChild("contenedor", { read: ViewContainerRef }) contenedor!: ViewContainerRef;

  proyectos : any; 

  editar(id: any, id2 : any){
    id.hidden = !id.hidden;
    id2.hidden = !id2.hidden;
    id.previousElementSibling.textContent = id.value;
    id2.previousElementSibling.textContent = id2.value;
  }

  agregar() {
    this.contenedor.createEmbeddedView(this.clon);
  }

  eliminar(e : any){
    e.target.parentElement.remove();
  }

  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.proyectos = data;
    })
  }

}
