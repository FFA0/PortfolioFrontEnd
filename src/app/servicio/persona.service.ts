import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Login } from '../interfaces/Login';
import { PersonaDto } from '../interfaces/PersonaDto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: String;

  logged = new BehaviorSubject<boolean>(false);
  usuarioActual: BehaviorSubject<Login>;
  usuario: Observable<Login>;

  constructor(private http: HttpClient) {
    this.apiUrl = "https://portfoliobackend-3mxq.onrender.com";

    this.usuarioActual = new BehaviorSubject<Login>(JSON.parse(sessionStorage.getItem("usuario") || "{}"));
    this.usuario = this.usuarioActual.asObservable();
  }

  traerPortfolio(): Observable<PersonaDto> {
    return this.http.get<PersonaDto>(this.apiUrl + "/persona/encontrar/" + 1)
  }

  login(log: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl + "/persona/login", log).pipe(tap(response => {
      sessionStorage.setItem("usuario", JSON.stringify(response));
      this.usuarioActual.next(response);
      this.logged.next(true);
      return response;
    }
    ));
  }

  logout(): void{
    sessionStorage.removeItem("usuario");
    this.logged.next(false);
  }

  get usuarioAutenticado(): Login {
    return this.usuarioActual.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.logged.asObservable();
  }

  editarPer(pers: PersonaDto): Observable<PersonaDto> {
    return this.http.put<PersonaDto>(this.apiUrl + "/persona/editar/" + pers.id, pers);
  }
}
