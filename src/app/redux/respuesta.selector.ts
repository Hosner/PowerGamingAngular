import { createFeatureSelector, createSelector } from '@ngrx/store';
import {respuestaReducer, State} from "./respuesta.reducer";

export const respuestaState = createFeatureSelector<State>(respuestaReducer);

export const inicioDatosRespuesta = createSelector(respuestaState, (state: State) => state.respuesta);

export const buscadorResultadoState = createFeatureSelector<State>(respuestaReducer);

export const buscadorResultadoRespuesta = createSelector(buscadorResultadoState, (state: State) => state.juegoSearch);

export const juegoDetail = createFeatureSelector<State>(respuestaReducer);

export const juegoDetailSuccess = createSelector(juegoDetail, (state: State) => state.juegoDetail);

export const bibliotecaDatos = createFeatureSelector<State>(respuestaReducer);

export const bibliotecaDatosSuccess = createSelector(bibliotecaDatos,(state: State) => state.juegosBiblioteca);


