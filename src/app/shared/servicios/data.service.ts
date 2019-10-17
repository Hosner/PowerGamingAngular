import {Injectable} from '@angular/core';
import {Usuario} from "../model/usuario";
import {Provincia} from "../model/provincia";
import {Pais} from "../model/pais";
import {Categoria} from "../model/categoria";
import {Creador} from "../model/creador";
import {Plataforma} from "../model/plataforma";
import {Idioma} from "../model/idioma";
import {Formato} from "../model/formato";
import {Tipoedicion} from "../model/tipoedicion";

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

    public usuarioLoggeado : Usuario;

    public idiomaWeb: string;

    public provincias: Provincia[];
    public paises: Pais[];
    public categorias: Categoria[];
    public creadores: Creador[];
    public plataformas: Plataforma[];
    public idiomas: Idioma[];
    public formatos: Formato[];
    public tipoEdiciones: Tipoedicion[];

    public pageSize: 3;
    public page: 1;

    constructor() {

    }
}
