import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoseService {

  objetos = "./assets/objetos.json";

  constructor(private http : HttpClient) { }
  
  obtenerObjetos():Observable<any>{
    return this.http.get(this.objetos)
  }
  
}
