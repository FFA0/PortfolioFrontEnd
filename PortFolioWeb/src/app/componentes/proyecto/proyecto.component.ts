import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: any;

  editar(id: any, id2: any) {
    id.hidden = !id.hidden;
    id2.hidden = !id2.hidden;
  }

  agregar() {

    let array =
    {
      "Titulo": "Nombre Del Proyecto",
      "Descripcion": "Descripcion del Proyecto"
    };

    this.proyectos.push(array)

  }

  eliminar(e: any) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.proyectos = data.Proyectos;
    })
  }

}
