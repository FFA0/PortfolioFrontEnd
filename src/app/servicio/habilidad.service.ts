import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../interfaces/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  apiUrl : String;

  constructor(private http : HttpClient) {
    this.apiUrl = "https://portfoliobackend-3mxq.onrender.com";
  }

  agregarHabil(habil : Habilidad) : Observable<Habilidad>{
    return this.http.post<Habilidad>(this.apiUrl + "/habilidad/crear", habil);
  }

  editarHabil(habil : Habilidad) : Observable<Habilidad>{
    return this.http.put<Habilidad>(this.apiUrl + "/habilidad/editar/" + habil.id, habil);
  }

  eliminarHabil(id : number) : Observable<Habilidad>{
    return this.http.delete<Habilidad>(this.apiUrl + "/habilidad/eliminar/" + id);
  } 
}
