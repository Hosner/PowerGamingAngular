import {Injectable} from '@angular/core';
import {Usuario} from "../model/usuario";
import {Entrada} from "../model/entrada";
import {Datosprecargajuego} from "../model/datosprecargajuego";

/**
 * Servicio para los datos compartidos
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
    /**
     * {string}  Mensaje que se envia en el body del modal
     * */
    public menssageModal: string;
    /**
     * {boolean} Boolean para mostrar el spinner de cargando cuando sea necesario
     * */
    public showLoading: boolean;

    public usuarioLoggeado: Usuario;
    public idiomaWeb: string;

    public entrada:Entrada;

    public datosPrecarga: Datosprecargajuego;


    constructor() {

    }
}
