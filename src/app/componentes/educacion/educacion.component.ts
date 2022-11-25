import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //info que se obtiene del json
  educacion: any;
  log : any;  

  //añadir info al json
  agregar() {
    let nuevoEdu =
    {
      "Descripcion": "texto educacion",
      "Logo": ""
    };
    this.educacion.push(nuevoEdu)
  }

  editarTexto(id :any){
    id.contentEditable = !id.isContentEditable;
    if(id.contentEditable == "true"){      
      id.style.backgroundColor = "rgb(212, 212, 212)"
    } else {      
      id.style.backgroundColor = ""
    }
  }

  eliminar(e: any, id : any) {
    id.parentElement.remove();
  }


  constructor(private datos: DatosService, private login : LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.educacion = data.Educacion;
    })
    this.log = this.login;
  }

}
