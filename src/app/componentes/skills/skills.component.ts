import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  porfolioSkills : any;   
  
  cambiarPorcentaje(valor: string){
    
    
    
    
    // if(valor != ""){
    //   this.porcentaje =  (parseInt(valor) * 3.6);
    // }    
    // else{
    //   this.porcentaje = 0;
    // }
  }

  agregar() {
    let nuevoSkill =
    {
      "nombre": "nombre",
      "valor": 0
    };
    this.porfolioSkills.push(nuevoSkill)
  }

  eliminar(e : any) {
    e.parentElement.remove();    
  }

  constructor(private datos : DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((data)=>{
      this.porfolioSkills = data.Skill;
    })
  }

}
