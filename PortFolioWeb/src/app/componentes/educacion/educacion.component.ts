import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: any;

  agregar() {

    let array =
    {
      "Descripcion": "texto educacion",
      "Logo": ""
    };
    this.edu.push(array)
  }

  editar(id: any) {
    id.hidden = !id.hidden;
  }

  borrar(e: any) {
    e.target.parentElement.parentElement.parentElement.remove();
  }


  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.edu = data.Educacion;
    })

  }

}
