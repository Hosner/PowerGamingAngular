import {createAction, props} from "@ngrx/store";
import {Respuesta} from "../shared/model/respuesta";
import {Juego} from "../shared/model/juego";

export const inicioDatosRespuesta = createAction(
  '[Inicio] Inicio Datos ',
);

export const inicioDatosRespuestaSuccess = createAction(
  '[PG] Success inicio datos',
  props<{ success: Respuesta }>()
);

export const buscadorResultadoRespuesta = createAction(
  '[Inicio] Buscador Resultado ',
);

export const buscadorResultadoSuccess = createAction(
  '[PG] Success buscador resultado',
  props<{ success: Juego[] }>()
);
