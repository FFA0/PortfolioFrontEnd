import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../interfaces/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  apiUrl : String;

  constructor(private http : HttpClient) { 
    this.apiUrl = "https://portfoliobackend-3mxq.onrender.com"; 
  }

  agregarEdu(edu : Educacion) : Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl + "/educacion/crear", edu);
  }

  editarEdu(edu : Educacion) : Observable<Educacion>{
    return this.http.put<Educacion>(this.apiUrl + "/educacion/editar/" + edu.id, edu);
  }

  eliminarEdu(id : number) : Observable<Educacion>{
    return this.http.delete<Educacion>(this.apiUrl + "/educacion/eliminar/" + id);
  } 
}
