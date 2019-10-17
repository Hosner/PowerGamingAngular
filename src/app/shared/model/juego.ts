import {Categoria} from './categoria';
import {Plataforma} from './plataforma';
import {Idioma} from './idioma';
import {Edicion} from './edicion';

export interface Juego {
      idJuego?: number;
      nombre?: string;
      fechaLanzamiento?: number;
      idCreador?: number;
      puntuacionMedia?: number;
      categoria?: Categoria[];
      plataformas?: Plataforma[];
      idiomas?: Idioma[];
      ediciones?: Edicion[];
      nombreCreador?: string;
      existeEnBiblioteca?: boolean;
  }



