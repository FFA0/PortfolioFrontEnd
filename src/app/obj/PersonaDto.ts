
import { Educacion } from "./Educacion";
import { Experiencia } from "./Experiencia";
import { Localidad } from "./Localidad";
import { Proyecto } from "./Proyecto";
import { Tecnologia } from "./Tecnologia";

export interface PersonaDto {

    id : number;
    nombre : String;
    apellido : String;
    titulo: String;
    acerca: String;
    urlFoto: String;
    urlBanner : String;
    listaEducacion : Educacion[];
    listaExperiencia : Experiencia[];
    listaProyecto : Proyecto[];
    listaTecnologia : Tecnologia[];
    localidad : Localidad;
}