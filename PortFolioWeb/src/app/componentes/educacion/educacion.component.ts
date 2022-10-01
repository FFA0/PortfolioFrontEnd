import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef,  } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @ViewChild("clon", {read : TemplateRef}) clon! : TemplateRef<any>; //template
  @ViewChild("contenedor", {read : ViewContainerRef}) contenedor! : ViewContainerRef; //contenedor

  edu : any;

  logoNuevo(id : any){
  }


  editar(id : any){

  }

  index : number = 1;

  agregar(){
    

    let array = 
      {
        "Descripcion": "texto",
        "Logo": ""
      };
    
    
    this.edu.Educacion.push(array)

    this.edu.Educacion.index += 1;

    this.contenedor.createEmbeddedView(this.clon);

  }

  // editar(id : any){
  //   id.hidden = !id.hidden;
  //   id.previousSibling.textContent = id.value;
  // }

  borrar(e : any){
   e.target.parentElement.parentElement.parentElement.remove();
  }


  constructor(private datos : DatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.edu = data;
      console.log(this.edu)
    })

  }

}
