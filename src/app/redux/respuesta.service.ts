import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Respuesta} from "../shared/model/respuesta";
import {Observable} from "rxjs";
import * as RespuestaSelectors from "./respuesta.selector";
import {Juego} from "../shared/model/juego";

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  constructor(private store: Store<Respuesta>) {}

  public inicioDatos(): Observable<Respuesta> {
    return this.store.select(RespuestaSelectors.inicioDatosRespuesta);
  }

  public resultadoBuscador(): Observable<Juego[]>{
    return this.store.select(RespuestaSelectors.buscadorResultadoRespuesta);
  }

  public juegoDetail(): Observable<Respuesta>{
    return this.store.select(RespuestaSelectors.juegoDetailSuccess);
  }

  public juegoBiblioteca(): Observable<Respuesta>{
    return this.store.select(RespuestaSelectors.bibliotecaDatosSuccess);
  }
}
