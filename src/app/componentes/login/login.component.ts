import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/obj/Login';
import { DatosService } from 'src/app/servicio/datos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  constructor(private datos : DatosService, private router: Router ) { }  
  
  submit(lForm: NgForm) {
    if (lForm.valid == true) {
      let l: Login = { "usuario": lForm.value.usuario, "contrasena": lForm.value.contrasena }
        this.datos.login(l).subscribe((response : any) => {
          this.datos.datosPortfolio = response;
          this.router.navigate(["/inicio"]);  
          this.datos.logeado()                  
      });
         
    } 
    else 
    {
      alert("Usuario y contraseña invalidos.");      
    }
  }
  
  ngOnInit(): void {  }
}
