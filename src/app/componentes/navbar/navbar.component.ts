import { Component, OnInit} from '@angular/core';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioAut : boolean = false;
    
  constructor(private perServ : PersonaService) { }

  abrirModal(id : any){
    id.style.display = "block";
  }

  cerrarModal(id : any){
    id.style.display = "none";
  }

  logout(){
    this.perServ.logout();
    this.usuarioAut = false;
  }

  ngOnInit() {
    this.perServ.estaAutenticado.subscribe({
      next: (response) => this.usuarioAut = response,
      error: (e) => console.error(e)
    });
  }
}
