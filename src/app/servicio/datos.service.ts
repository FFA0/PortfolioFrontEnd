import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../obj/Educacion';
import { Experiencia } from '../obj/Experiencia';
import { Login } from '../obj/Login';
import { PersonaDto } from '../obj/PersonaDto';
import { Proyecto } from '../obj/Proyecto';
import { Tecnologia } from '../obj/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  apiUrl : string;
  datosPortfolio : PersonaDto = {
    id : 0,
    urlFoto : "",
    urlBanner : "",
    nombre : "",
    apellido : "",
    titulo : "",
    acerca : "",
    listaEducacion : [],
    listaExperiencia : [],
    listaProyecto : [],
    listaTecnologia : [],
    localidad :  {id : 0, localidad: ""},
  }

  log : boolean = false;
  edicion : boolean = false;
  
  @Output() loginEmision: EventEmitter<any> = new EventEmitter();
  @Output() editEmision: EventEmitter<any> = new EventEmitter();

  constructor(private http : HttpClient) { 
    this.apiUrl = "https://portfoliobackend-wgl5.onrender.com";    
  }

  //login
  login(log : Login) : Observable<Login>{
    return this.http.post<Login>(this.apiUrl + "/persona/login", log);    
  }

  logeado(): any {
    this.log = !this.log;
    this.loginEmision.emit(this.log);
  }

  modoEdicion() {
    this.edicion = !this.edicion;
    this.editEmision.emit(this.edicion); 
  }

  //acerca
  editarPer(pers : PersonaDto) : Observable<PersonaDto>{
    return this.http.put<PersonaDto>(this.apiUrl + "/persona/editar/" + this.datosPortfolio.id, pers);
  }

  guardarDatos(pers : PersonaDto){
    pers = this.datosPortfolio;    
  }  

  //exp
  agregarExp(exp : Experiencia) : Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl + "/experiencia/crear", exp);
  }

  editarExp(exp : Experiencia) : Observable<Experiencia>{
    return this.http.put<Experiencia>(this.apiUrl + "/experiencia/editar/" + exp.id , exp);
  }
  
  eliminarExp(id : number) : Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.apiUrl + "/experiencia/eliminar/" + id);
  }
  
  //edu
  agregarEdu(edu : Educacion) : Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl + "/educacion/crear", edu);
  }

  editarEdu(edu : Educacion) : Observable<Educacion>{
    return this.http.put<Educacion>(this.apiUrl + "/educacion/editar/" + edu.id, edu);
  }

  eliminarEdu(id : number) : Observable<Educacion>{
    return this.http.delete<Educacion>(this.apiUrl + "/educacion/eliminar/" + id);
  } 
  
  //tec
  agregarTec(tec : Tecnologia) : Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.apiUrl + "/tecnologia/crear", tec);
  }

  editarTec(tec : Tecnologia) : Observable<Tecnologia>{
    return this.http.put<Tecnologia>(this.apiUrl + "/tecnologia/editar/" + tec.id, tec);
  }

  eliminarTec(id : number) : Observable<Tecnologia>{
    return this.http.delete<Tecnologia>(this.apiUrl + "/tecnologia/eliminar/" + id);
  } 

  //pro
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

