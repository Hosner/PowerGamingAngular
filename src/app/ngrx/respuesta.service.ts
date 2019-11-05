import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Respuesta} from "../shared/model/respuesta";
import {Observable} from "rxjs";
import * as RespuestaSelectors from "./respuesta.selector";

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  constructor(private store: Store<Respuesta>) {}

  public inicioDatos(): Observable<Respuesta> {
    return this.store.select(RespuestaSelectors.inicioDatosRespuesta);
  }
}
