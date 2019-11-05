import { createFeatureSelector, createSelector } from '@ngrx/store';
import {respuestaReducer, State} from "./respuesta.reducer";

export const respuestaState = createFeatureSelector<State>(respuestaReducer);

export const inicioDatosRespuesta = createSelector(respuestaState, (state: State) => state.respuesta);


