import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/Login';
import { PersonaService } from 'src/app/servicio/persona.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estaAutenticado: boolean = false;


  constructor(private perServ: PersonaService, private router: Router) { }

  submit(lForm: NgForm) {
    let l: Login =
      { "usuario": lForm.value.usuario, "contrasena": lForm.value.contrasena }

    if (lForm.valid == true) {
      this.perServ.login(l).subscribe({
        next: (response) => {
          if (response != null) {
            lForm.reset();
            this.estaAutenticado = true;
            this.router.navigate(["/inicio"]);
          }
        },
        error: (e) => {
          this.estaAutenticado = false;
          alert("Usuario y/o contraseña incorrectos.");
        }
      })
    } else {
      this.estaAutenticado = false;
      alert("Usuario y/o contraseña invalidos.");
    }
  }

  ngOnInit() { }

}

