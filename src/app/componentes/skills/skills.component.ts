import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  conocimiento : any;

  editar(e : any, id : any){
    id.hidden = !id.hidden
  }

  agregar(){
    let skill = {
      "logo" : "",
      "Descripcion" : "texto"
  }

  this.conocimiento.push(skill)
  }

  eliminar(e: any, id: any) {
    id.parentElement.remove();
  }

  constructor(private datos : DatosService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(datos =>{
    this.conocimiento = datos.Conocimientos
  })
  }

}
