import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../interfaces/Localidad';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  apiUrl : String;

  constructor(private http : HttpClient) { 
    this.apiUrl = "https://portfoliobackend-wgl5.onrender.com";
  }

  traerLista(): Observable<Localidad[]>{
    return this.http.get<Localidad[]>(this.apiUrl + "/domicilio/lista");
  }

  agregarLocalidad(loc : Localidad) : Observable<Localidad> {
    return this.http.post<Localidad>(this.apiUrl + "/domicilio/crear", loc);
  }

  editarLocalidad(loc : Localidad) : Observable<Localidad>{
    return this.http.put<Localidad>(this.apiUrl + "/domicilio/editar/" + loc.id , loc);
  }

}
