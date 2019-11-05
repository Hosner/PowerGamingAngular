/**
 * Objeto entrada de la peticion
 */
import {Categoria} from "./categoria";
import {Creador} from "./creador";
import {Plataforma} from "./plataforma";
import {Idioma} from "./idioma";
import {Usuario} from "./usuario";
import {Itembiblioteca} from "./itembiblioteca";

export class Entrada {
  MetodoPeticion: string;
  Action: string;

  Nombre?:string;

  Categorias?:Categoria[];
  Creador?:Creador;
  Plataforma?:Plataforma;
  Plataformas?:Plataforma[];
  Idioma?:Idioma;
  Idiomas?:Idioma[];
  Fecha?:string;
  IdJuego?:number;
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
