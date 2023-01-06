import { Component,EventEmitter,OnChanges,OnInit, Output} from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  log : boolean = false; 
  
  constructor(private datos : DatosService) { }

  editarPortfolio(){
    this.datos.modoEdicion();    
  }
  
  logout(){
    window.location.reload();
  }

  ngOnInit() { 
    this.datos.loginEmision.subscribe(valor => {
      this.log = valor;      
   });
  }
}
