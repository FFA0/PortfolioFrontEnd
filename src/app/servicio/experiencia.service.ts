import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../interfaces/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl : String;

  constructor(private http : HttpClient) { 
    this.apiUrl = "https://portfoliobackend-wgl5.onrender.com";
  }

  agregarExp(exp : Experiencia) : Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl + "/experiencia/crear", exp);
  }

  editarExp(exp : Experiencia) : Observable<Experiencia>{
    return this.http.put<Experiencia>(this.apiUrl + "/experiencia/editar/" + exp.id , exp);
  }
  
  eliminarExp(id : number) : Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.apiUrl + "/experiencia/eliminar/" + id);
  }
}
