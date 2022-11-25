import { Component,EventEmitter,OnInit, Output} from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  metodo : any;
  
  constructor(private datos : LoginService) { }

  ngOnInit(): void {
    this.metodo = this.datos;
  }
}
