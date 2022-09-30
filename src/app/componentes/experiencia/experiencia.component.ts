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
    this.contenedor.createEmbeddedView(this.template);
  }

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.experiencia = data;
    })
  }
}
