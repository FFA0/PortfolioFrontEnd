import {
  Component,
  OnInit,
} from '@angular/core'
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  //info que se obtiene del json
  experiencia: any;
  
  editarTexto(id :any){
    if(id.contentEditable == "false"){
      id.contentEditable = "true";
      id.style.backgroundColor = "rgb(212, 212, 212)"
    } else {
      id.contentEditable = "false";
      id.style.backgroundColor = "";
    }
  }

  borrarNodo(e: any, id : any) {
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

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data.Experiencia;
    })
  }
}
