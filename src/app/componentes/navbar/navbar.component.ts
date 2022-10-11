import { Component,EventEmitter,OnInit, Output} from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  modoEditar(){
  }
 
  constructor(private datos : DatosService) { }

  ngOnInit(): void {
  }
}
