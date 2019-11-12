import { createFeatureSelector, createSelector } from '@ngrx/store';
import {respuestaReducer, State} from "./respuesta.reducer";

export const respuestaState = createFeatureSelector<State>(respuestaReducer);

export const inicioDatosRespuesta = createSelector(respuestaState, (state: State) => state.respuesta);

export const buscadorResultadoState = createFeatureSelector<State>(respuestaReducer);

export const buscadorResultadoRespuesta = createSelector(buscadorResultadoState, (state: State) => state.juegoSearch);

export const loginResultadoState = createFeatureSelector<State>(respuestaReducer);

export const loginResultadoRespuesta = createSelector(loginResultadoState, (state: State) => state.respuestaLogin);
