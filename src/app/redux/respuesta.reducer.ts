import {Action, createReducer, on} from "@ngrx/store";
import * as RespuestaActions from "./respuesta.actions";
import {Respuesta} from "../shared/model/respuesta";
import {Juego} from "../shared/model/juego";

export const respuestaReducer = 'respuestaReducer';

export interface State{
  respuesta?: Respuesta;
  juegoSearch?: Juego[];
  juegoDetail?: Respuesta;
  juegosBiblioteca?: Respuesta;
}

export const initialState: State = {respuesta: undefined, juegoSearch: undefined,juegoDetail:undefined, juegosBiblioteca:undefined};

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
  on(RespuestaActions.juegoDetail, state => state),
  on(RespuestaActions.juegoDetailSuccess, (state, payload) => {
    return {
      ...state,
      juegoDetail:  payload.success
    }
  }),
  on(RespuestaActions.bibliotecaRespuesta, state => state),
  on(RespuestaActions.bibliotecaRespuestaSuccess, (state, payload) =>{
    return {
      ...state,
      juegosBiblioteca: payload.success
    }
  })
);

export function RespuestaReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
