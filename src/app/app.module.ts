import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { PersonaService } from './servicio/persona.service';
import { ExperienciaService } from './servicio/experiencia.service';
import { EducacionService } from './servicio/educacion.service';
import { ProyectoService } from './servicio/proyecto.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [PersonaService, 
              ExperienciaService, 
              EducacionService, 
              ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
