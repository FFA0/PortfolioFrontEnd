import { TipoEmpleo } from "./TipoEmpleo";

export interface Experiencia {
    id : number;
    tituloPuesto : String;
    empresa : String
    trabajoActual : boolean;
    actividad : String;
    fechaInicio : Date;
    fechaFinal : Date;
    urlFoto : String;
    tipo : TipoEmpleo;
    persona : {};
}