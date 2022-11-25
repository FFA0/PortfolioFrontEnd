import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: any;
  log : any;

  editarTexto(id1 : any, id2 : any) {
    id1.contentEditable = !id1.isContentEditable;
    id2.contentEditable = !id2.isContentEditable;
    if(id1.contentEditable == "true"){    
       id1.style.backgroundColor = "rgb(212, 212, 212)";
       id2.style.backgroundColor = "rgb(212, 212, 212)";
     } 
     else {       
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

  eliminar(e: any, id: any) {
    id.parentElement.remove();
  }

  constructor(private datos: DatosService, private login : LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.proyectos = data.Proyectos;
    })
    this.log = this.login;
  }

}
