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

  //btn editar la descripcion
  visibilidad(e : any, id: any) {
    id.hidden = e;
  }

  //eliminar nodo
  borrarNodo(e: any, id : any) {
    id.parentElement.remove();
  }

  //btn para añadir el template
  agregar() {
    let array =
    {
      "Descripcion": "texto",
      "Logo": ""
    };

    this.experiencia.push(array)
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data.Experiencia;
    })
  }
}
