import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../interfaces/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {  
  apiUrl : String;

  constructor(private http : HttpClient) {
    this.apiUrl = "https://portfoliobackend-3mxq.onrender.com";
  }

  agregarPro(pro : Proyecto) : Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl + "/proyecto/crear", pro);
  }
  
  editarPro(pro : Proyecto) : Observable<Proyecto>{
    return this.http.put<Proyecto>(this.apiUrl + "/proyecto/editar/" + pro.id, pro);
  }

  eliminarPro(id : number) : Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.apiUrl + "/proyecto/eliminar/" + id);
  } 
}
