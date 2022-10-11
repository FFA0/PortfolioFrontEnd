import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: any;

  editarTexto(id1 : any, id2 : any) {
    if(id1.contentEditable == "false"){
      id1.contentEditable = "true";
      id2.contentEditable = "true";
      id1.style.backgroundColor = "rgb(92, 168, 255)";
      id2.style.backgroundColor = "rgb(92, 168, 255)";
    } else {
      id1.contentEditable = "false";
      id2.contentEditable = "false";
      id1.style.backgroundColor = "";
      id2.style.backgroundColor = "";
    }
  }

  agregar() {

    let proyecto =
    {
      "Titulo": "Nombre Del Proyecto",
      "Descripcion": "Descripcion del Proyecto"
    }

    this.proyectos.push(proyecto)

  }

  borrarNodo(e: any, id: any) {
    id.parentElement.remove();
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.proyectos = data.Proyectos;
    })
  }

}
