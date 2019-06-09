import { Submiter } from './submiter';
import { Checker } from './checker';
import { Usuario } from './usuario';
import { Mecanismos } from './mecanismos';

export class Hechos {
    constructor(){
    }
    id : string;
    titulo : string;
    submiter : Submiter;
    checkers : Array<Checker>;
    url : string;
    usuarioAlta : Usuario;
    fechaRegistroCalificacion : Date;
    fechaCalificacion : Date;
    justificacion : string;
    validado : boolean;
    mecanismos : Array<Mecanismos>;
    calificacion : string;
    
}
