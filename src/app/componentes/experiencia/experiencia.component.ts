import {
  Component,
  OnInit,
} from '@angular/core'
import { DatosService } from 'src/app/servicio/datos.service';
import { LoginService } from 'src/app/servicio/login.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  //info que se obtiene del json
  experiencia: any;
  log : any;
  
  //editar texto 
  editarTexto(id :any){
    id.contentEditable = !id.isContentEditable;
    if(id.contentEditable == "true"){
      id.style.backgroundColor = "rgb(212, 212, 212)"
    } 
    else {
      id.style.backgroundColor = "";
    }
  }

  eliminar(e: any, id : any) {
    id.parentElement.remove();
  }

  //añadir info al json
  agregar() {
    let exp =
    {
      "Descripcion": "texto",
      "Logo": ""
    }
    this.experiencia.push(exp)
  }

  constructor(private datos: DatosService, private login : LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data.Experiencia;
    })
    this.log = this.login;
  }
}
