import {Entrada} from "./entrada";

/**
 * Objecto para la petición que enviamos a back
 */
export interface Peticion {
    Servicio: string;
    Metodo: string;
    IdiomaWeb: string;
    Action: string;
    Id?: string;
    Entrada?: Entrada;
}
