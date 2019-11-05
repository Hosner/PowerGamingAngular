import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, concatMap, map} from "rxjs/operators";
import {Respuesta} from "../shared/model/respuesta";
import * as RespuestaActions from ".//respuesta.actions";
import {of} from "rxjs";
import {environment} from "../../environments/environment";
import {Peticion} from "../shared/model/peticion";
import {DataService} from "../shared/servicios/data.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable()
export class RespuestaEffects {
  private readonly CONTROLLER_SERVICE: string = 'Controller';

  public loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RespuestaActions.inicioDatosRespuesta),
      concatMap(() =>
        this.http.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Servicio: this.CONTROLLER_SERVICE,
            Metodo: 'Inicio',
            IdiomaWeb: this._dataService.idiomaWeb,
            Action: 'DatosInicio',
            Entrada: this._dataService.entrada},
            httpOptions).pipe(
              map(respuesta => RespuestaActions.inicioDatosRespuestaSuccess({success: respuesta}))
            )
      )
    )
  );

  constructor(private actions$: Actions,
              private http: HttpClient,
              private _dataService:  DataService) {}


}
