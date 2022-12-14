import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { LoginComponent } from './componentes/login/login.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

let routes: Routes = [
  { 
    path: "", 
    redirectTo: "/inicio", 
    pathMatch: "full"
  },
  { 
    path: "inicio", 
    component: BannerComponent,
    data: {animation: "inicio"} 
  },
  { 
    path: "login", 
    component: LoginComponent,
    data: {animation: "login"} 
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
