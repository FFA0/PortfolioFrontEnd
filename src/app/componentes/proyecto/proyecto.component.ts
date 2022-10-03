import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: any;

  visibilidad(e : any, id: any, id2: any) {
    id.hidden = e;
    id2.hidden = e;
  }

  agregar() {

    let array =
    {
      "Titulo": "Nombre Del Proyecto",
      "Descripcion": "Descripcion del Proyecto"
    };

    this.proyectos.push(array)

  }

  borrarNodo(e: any, id : any) {
    id.parentElement.remove();
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.proyectos = data.Proyectos;
    })
  }

}
