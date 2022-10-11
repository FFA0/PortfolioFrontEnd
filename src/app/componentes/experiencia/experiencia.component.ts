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

  experiencia: any;
  botonEliminar : any = {"margin-top" : "-245px"}

  editarTexto(id :any){
    if(id.contentEditable == "false"){
      id.contentEditable = "true";
      id.style.backgroundColor = "rgb(92, 168, 255)"
    } else {
      id.contentEditable = "false";
      id.style.backgroundColor = "";
    }
  }

  //eliminar nodo
  borrarNodo(e: any, id : any) {
    id.parentElement.remove();
  }

  //btn para añadir el template
  agregar() {
    let exp =
    {
      "Descripcion": "texto",
      "Logo": ""
    };

    this.experiencia.push(exp)
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data.Experiencia;
    })
  }
}
