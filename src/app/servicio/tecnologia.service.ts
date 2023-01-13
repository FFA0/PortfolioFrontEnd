import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interfaces/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  apiUrl : String;

  constructor(private http : HttpClient) {
    this.apiUrl = "https://portfoliobackend-wgl5.onrender.com";
  }

  agregarTec(tec : Tecnologia) : Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.apiUrl + "/tecnologia/crear", tec);
  }

  editarTec(tec : Tecnologia) : Observable<Tecnologia>{
    return this.http.put<Tecnologia>(this.apiUrl + "/tecnologia/editar/" + tec.id, tec);
  }

  eliminarTec(id : number) : Observable<Tecnologia>{
    return this.http.delete<Tecnologia>(this.apiUrl + "/tecnologia/eliminar/" + id);
  } 
}
