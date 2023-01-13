import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEmpleo } from '../interfaces/TipoEmpleo';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpleoService {
  apiUrl : String;

  constructor(private http : HttpClient) {
    this.apiUrl = "https://portfoliobackend-wgl5.onrender.com"; 
  }

  traerListaTipo(): Observable<TipoEmpleo[]>{
    return this.http.get<TipoEmpleo[]>(this.apiUrl + "/tipoempleo/lista");
  }
}
