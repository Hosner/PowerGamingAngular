import {Juego} from "./juego";
import {Usuario} from "./usuario";
import {Pais} from "./pais";
import {Itembiblioteca} from "./itembiblioteca";
import {Datosprecargajuego} from "./datosprecargajuego";


/**
 * Objecto de la respuesta que nos devuelve back
 */
export class Respuesta {
    Status?: string;
    StatusMsg?: string;

    //DatosPrecargados
    Pais?:Pais[];

    DatosPrecargaJuego?: Datosprecargajuego;


    Valoracion?:Juego[];
    Todos?:Juego[];

    Juego?:Juego;
    Comentarios?:[Itembiblioteca];

    IdsJuegosBiblioteca?:number[];
    JuegosBiblioteca?:Juego[];
    Puntuacion?:Itembiblioteca[];

    JuegosSearch?:Juego[];

    usuario?:Usuario;

}
