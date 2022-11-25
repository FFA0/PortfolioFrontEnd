import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  
  constructor(private http : HttpClient) { }
    
  datosPortfolio = "./assets/datos.json"
  
  obtenerDatos():Observable<any>{
    return this.http.get(this.datosPortfolio);
  }
}

