import {Action, createReducer, on} from "@ngrx/store";
import * as RespuestaActions from "./respuesta.actions";
import {Respuesta} from "../shared/model/respuesta";

export const respuestaReducer = 'respuestaReducer';

export interface State{
  respuesta: Respuesta;
}

export const initialState: State = {respuesta: undefined};

const reducer = createReducer(
  initialState,
  on(RespuestaActions.inicioDatosRespuesta, state => state),
  on(RespuestaActions.inicioDatosRespuestaSuccess, (state, payload) => {
    return {
      ...state,
      respuesta:  payload.success
    }
  })
);

export function RespuestaReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
