import {Juego} from "./juego";
import {Usuario} from "./usuario";
import {Provincia} from "./provincia";
import {Pais} from "./pais";
import {Creador} from "./creador";
import {Idioma} from "./idioma";
import {Plataforma} from "./plataforma";
import {Categoria} from "./categoria";
import {Itembiblioteca} from "./itembiblioteca";
import {Tipoedicion} from "./tipoedicion";
import {Formato} from "./formato";

/**
 * Objecto de la respuesta que nos devuelve back
 */
export interface Respuesta {
    Status: string;
    StatusMsg: string;

    //DatosPrecargados
    Provincias?:Provincia[];
    Pais?:Pais[];
    Categorias?:Categoria[];
    Creadores?:Creador[];
    Idiomas?:Idioma[];
    Plataformas?:Plataforma[];
    Formatos?:Formato[];
    TipoEdiciones?:Tipoedicion[];

    Valoracion?:Juego[];
    Todos?:Juego[];

    Juego?:Juego;
    Comentarios?:Map<string,Itembiblioteca>;

    IdsJuegosBiblioteca?:number[];
    JuegosBiblioteca?:Juego[];
    Puntuacion?:Itembiblioteca[];

    JuegosSearch?:Juego[];

    usuario?:Usuario;

}
