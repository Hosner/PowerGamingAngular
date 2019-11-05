import {Categoria} from "./categoria";
import {Creador} from "./creador";
import {Idioma} from "./idioma";
import {Plataforma} from "./plataforma";
import {Formato} from "./formato";
import {Tipoedicion} from "./tipoedicion";

export interface Datosprecargajuego {
  Categorias?:Categoria[];
  Creadores?:Creador[];
  Idiomas?:Idioma[];
  Plataformas:Plataforma[];
  Formatos?:Formato[];
  TipoEdiciones?:Tipoedicion[];
}
