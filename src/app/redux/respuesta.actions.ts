import {createAction, props} from "@ngrx/store";
import {Respuesta} from "../shared/model/respuesta";
import {Juego} from "../shared/model/juego";

export const inicioDatosRespuesta = createAction(
  '[Inicio] Inicio Datos ',
);

export const inicioDatosRespuestaSuccess = createAction(
  '[InicioDatos] Success inicio datos',
  props<{ success: Respuesta }>()
);

export const buscadorResultadoRespuesta = createAction(
  '[Busqueda] Buscador Resultado ',
);

export const buscadorResultadoSuccess = createAction(
  '[BusquedaDatos] Success buscador resultado',
  props<{ success: Juego[] }>()
);

export const juegoDetail = createAction(
  '[Juego Detail] Juego Detail'
);

export const  juegoDetailSuccess = createAction(
  '[Juego Detail Sucess] Success',
  props<{ success: Respuesta}>()
);
