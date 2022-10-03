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

  visibilidad(e : any, id : any) {
    id.hidden = e;
  }

  borrarNodo(e: any, id : any) {
    id.parentElement.remove();
  }


  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.edu = data.Educacion;
    })

  }

}
