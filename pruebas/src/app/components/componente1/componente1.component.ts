import { Component, OnInit } from '@angular/core';
import { NoseService } from 'src/app/nose.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private cosas: NoseService ) { }

  exp : any;

  ngOnInit(): void {
    this.cosas.obtenerObjetos().subscribe((data)=>{
      this.exp = data;
    })
  }

}
