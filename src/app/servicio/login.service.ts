import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  editar : boolean = true;
  
  modoEditar(){
    this.editar = !this.editar;      
  }

  constructor() { }
}
