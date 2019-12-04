/**
 * Objeto entrada de la peticion
 */
import {Usuario} from "./usuario";
import {Itembiblioteca} from "./itembiblioteca";

export class Entrada {
  MetodoPeticion?: string;

  Nombre?:string;

  Categorias?:number[];
  Creador?:string;
  Plataformas?:number[];
  Idiomas?:string[];
  Fecha?:string;
  IdJuego?:string;
  usuario?:Usuario;

  IdLogin?:string;
  Email?:string;
  Password?:string;
  Apellido1?:string;
  Apellido2?:string;
  Telefono?:string;
  FechaNacimiento?:string;
  Genero?:string;
  NombreUser?:string;

  Mensage?:string;

  Puntuacion?:string;
  Comentario?:Map<string, Itembiblioteca>;
}
