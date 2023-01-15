
import { Educacion } from "./Educacion";
import { Experiencia } from "./Experiencia";
import { Habilidad } from "./Habilidad";
import { Localidad } from "./Localidad";
import { Proyecto } from "./Proyecto";

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
    listaHabilidad : Habilidad[];
    localidad : Localidad;
}