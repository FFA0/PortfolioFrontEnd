import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  @ViewChild('template', { read: TemplateRef })
  template!: TemplateRef<any>; //el template

  @ViewChild('contenedor', { read: ViewContainerRef })
  contenedor!: ViewContainerRef; //donde añadir el template


  experiencia: any;
  index : number = 0;

  //btn editar la descripcion
  editarDescripcion(id: any) {
    id.hidden = !id.hidden;
    id.previousSibling.textContent = id.value;
  }


  //eliminar nodo
  borrar(e: any) {
    e.target.previousElementSibling.remove();
    e.target.remove();
  }

  //btn para añadir el template


  agregar() {
    let array =
    {
      "Descripcion": "texto",
      "Logo": ""
    };

    this.experiencia.Experiencia.push(array)

    this.experiencia.Experiencia.index += 1;

    this.contenedor.createEmbeddedView(this.template);

    console.log(this.experiencia)

  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data;
    })
  }
}
