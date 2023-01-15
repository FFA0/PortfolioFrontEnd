import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { deslizar } from './animaciones';
import { PersonaService } from './servicio/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ deslizar ]
})
export class AppComponent implements OnInit{
  title = 'PortFolioWeb';

  animationData(){
    return this.data.getContext("primary")?.route?.snapshot?.data?.["animation"];
  }

  constructor(private data : ChildrenOutletContexts, private perServ : PersonaService) { }

  ngOnInit(): void {   
      if(sessionStorage.getItem("usuario")){
        this.perServ.logged.next(true);
      }   
  }
}

