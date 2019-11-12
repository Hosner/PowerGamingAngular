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

export const loginRespuesta = createAction(
  '[Login] Login Restultado'
);

export const loginRespuestaSuccess = createAction(
  '[Login Datos] Success Login Resultado',
  props<{ success: Respuesta}>()
);

