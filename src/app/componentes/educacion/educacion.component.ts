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

    let nuevoEdu =
    {
      "Descripcion": "texto educacion",
      "Logo": ""
    };
    this.edu.push(nuevoEdu)
  }

  editarTexto(id :any){
    if(id.contentEditable == "false"){
      id.contentEditable = "true";
      id.style.backgroundColor = "rgb(92, 168, 255)"
    } else {
      id.contentEditable = "false";
      id.style.backgroundColor = ""
    }
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
