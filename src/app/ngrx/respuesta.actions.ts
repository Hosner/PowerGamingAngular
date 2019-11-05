import {createAction, props} from "@ngrx/store";
import {Respuesta} from "../shared/model/respuesta";

export const inicioDatosRespuesta = createAction(
  '[Inicio] Inicio Datos ',
);

export const inicioDatosRespuestaSuccess = createAction(
  '[PG] Success ',
  props<{ success: Respuesta }>()
);


