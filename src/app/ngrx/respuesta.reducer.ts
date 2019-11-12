import {Action, createReducer, on} from "@ngrx/store";
import * as RespuestaActions from "./respuesta.actions";
import {Respuesta} from "../shared/model/respuesta";
import {Juego} from "../shared/model/juego";
import {Usuario} from "../shared/model/usuario";

export const respuestaReducer = 'respuestaReducer';

export interface State{
  respuesta?: Respuesta;
  juegoSearch?: Juego[];
  respuestaLogin?: Respuesta;
}

export const initialState: State = {respuesta: undefined, juegoSearch: undefined, respuestaLogin:undefined};

const reducer = createReducer(
  initialState,
  on(RespuestaActions.inicioDatosRespuesta, state => state),
  on(RespuestaActions.inicioDatosRespuestaSuccess, (state, payload) => {
    return {
      ...state,
      respuesta:  payload.success
    }
  }),
  on(RespuestaActions.buscadorResultadoRespuesta, state => state),
  on(RespuestaActions.buscadorResultadoSuccess, (state, payload) => {
    return {
      ...state,
      juegoSearch:  payload.success
    }
  }),
  on(RespuestaActions.loginRespuesta, state => state),
  on(RespuestaActions.loginRespuestaSuccess, (state, payload) => {
    return {
      ...state,
      respuestaLogin:  payload.success
    }
  })
);

export function RespuestaReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
